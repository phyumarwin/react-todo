import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoesList from './components/TodoesList.js';
import CheckAllAndRemaining from './components/CheckAllAndRemaining.js';
import TodoFilter from './components/TodoFilter.js';
import ClearCompletedBtn from './components/ClearCompletedBtn.js';
import { useCallback, useEffect, useState } from 'react';


function App() {
  const [todoes, setTodoes] =  useState([]);

  const [filteredTodoes, setFilteredTodoes] = useState(todoes)

  useEffect ( () => {
    fetch('http://localhost:3001/todoes')
    .then(res=>res.json())
    .then((todoes) => {
      setTodoes(todoes)
      setFilteredTodoes(todoes)
    })
  }, []);

  const filterBy = useCallback((filter) => {
    if(filter == 'All'){
      setFilteredTodoes(todoes)
    }
    if(filter == 'Active'){
      setFilteredTodoes(todoes.filter(t => !t.completed))
    }
    if(filter == 'Completed'){
      setFilteredTodoes(todoes.filter(t => t.completed))
    }
  }, [todoes])

  const addTodo = (todo) => {
    fetch ('http://localhost:3001/todoes', {
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( todo ),
    })
    setTodoes(prevState => [...prevState, todo]);
  }

  const deleteTodo = (todoId) => {
    fetch (`http://localhost:3001/todoes/${todoId}`,{
      method : "DELETE"
    })
    setTodoes(prevState => {
      return prevState.filter(todo => {
        return todo.id != todoId
      })
    })
  }

  const updateTodo = (todo) => {
    fetch (`http://localhost:3001/todoes/${todo.id}`, {
      method : "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( todo ),
    })
    setTodoes(prevState => {
      return prevState.map(t => {
        if(t.id == todo.id){
          return todo
        }
        return t;
      })
    })
  }

  const checkAll = () => {
    todoes.forEach(t => {
      t.completed = true;
      updateTodo(t)
    })
    setTodoes((prevState) => {
      return prevState.map(t => {
        return {...t, completed : true };
      })
    })
  }

  const clearCompleted = () => {
    todoes.forEach(t => {
      if(t.completed) {
        deleteTodo(t.id)
      }
    })
    setTodoes((prevState) => {
      return prevState.filter(t => !t.completed)
    })
  }

  const remainingCount =  todoes.filter(t => !t.completed).length

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo}/>
        <TodoesList todoes = {filteredTodoes} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        <CheckAllAndRemaining remainingCount={remainingCount} checkAll={checkAll}/>
        <div className="other-buttons-container">
          <TodoFilter filterBy={filterBy}/>
          <ClearCompletedBtn clearCompleted={clearCompleted}/>
        </div>
      </div>
    </div>
  );
}

export default App;
