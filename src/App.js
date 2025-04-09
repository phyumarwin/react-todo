import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoesList from './components/TodoesList.js';
import CheckAllAndRemaining from './components/CheckAllAndRemaining.js';
import TodoFilter from './components/TodoFilter.js';
import ClearCompletedBtn from './components/ClearCompletedBtn.js';
import { useEffect, useState } from 'react';


function App() {
  const [todoes, setTodoes] =  useState([]);

  useEffect ( () => {
    fetch('http://localhost:3001/todoes')
    .then(res=>res.json())
    .then((todoes) => {
      setTodoes(todoes)
    })
  }, []);

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

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo}/>
        <TodoesList todoes = {todoes} deleteTodo={deleteTodo}/>
        <CheckAllAndRemaining/>
        <div className="other-buttons-container">
          <TodoFilter/>
          <ClearCompletedBtn/>
        </div>
      </div>
    </div>
  );
}

export default App;
