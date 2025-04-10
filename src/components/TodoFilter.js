import React, { useState } from 'react';

const TodoFilter = () => {
    const [filter, setFilter] = useState('All');
    return (
        <div>
            <div>
                <button className="button filter-button filter-button-active" onClick={() => setFilter('All')}>
                    All
                </button>
                <button className="button filter-button" onClick={() => setFilter('Active')}>Active</button>
                <button className="button filter-button" onClick={() => setFilter('Completed')}>Completed</button>
            </div>
        </div>
    );
}

export default TodoFilter;
