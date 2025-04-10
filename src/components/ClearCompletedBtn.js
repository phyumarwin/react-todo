import React from 'react';

const ClearCompletedBtn = ({clearCompleted}) => {
    return (
        <div>
            <div>
                <button className="button" onClick={clearCompleted} >Clear completed</button>
            </div>
        </div>
    );
}

export default ClearCompletedBtn;
