import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            id : Math.random(),
            title,
            completed : false
        }
        addTodo(todo);
        setTitle('');
    }
    return (
        <div>
            <form action='#' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='todo-input'
                    placeholder='What do you need to do?'
                    onChange={e=> setTitle(e.target.value)}
                    value={title}
                />
            </form>
        </div>
    );
}

export default TodoForm;
