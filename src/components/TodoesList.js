import React from 'react';
import Todo from '../components/Todo.js';

const TodoesList = ({todoes, deleteTodo}) => {
  return (
    <div>
      <ul className="todo-list">
        { todoes.map( todo => (
          <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoesList;
