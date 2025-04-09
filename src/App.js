import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoesList from './components/TodoesList.js';
import CheckAllAndRemaining from './components/CheckAllAndRemaining.js';
import TodoFilter from './components/TodoFilter.js';
import ClearCompletedBtn from './components/ClearCompletedBtn.js';


function App() {
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm/>
        <TodoesList/>
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
