import React, { useState } from 'react';

const Todo = ({todo, deleteTodo, updateTodo}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const updateTodoHandler = (e) => {
    e.preventDefault();
    const updatedTodo = {
      id : todo.id,
      title,
      conpleted : todo.completed
    }
    updateTodo(updatedTodo);
    setIsEdit(false);
  }
  return (
      <div>
        <li className="todo-item-container" key={todo.id}>
          <div className="todo-item">
            <input type="checkbox" />
            {!isEdit && <span onDoubleClick={ () => setIsEdit(true)} className={`todo-item-label ${todo.completed ? 'line-through' : ''}`}>
              {todo.title}
            </span>}
            {isEdit && 
              <form onSubmit={updateTodoHandler}>
                <input type="text" className="todo-item-input" value={title} onChange={(e) => setTitle(e.target.value)} />
              </form>
            }
          </div>
          <button className="x-button" onClick={() => deleteTodo(todo.id)}>
            <svg
              className="x-button-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      </div>
  );
}

export default Todo;
