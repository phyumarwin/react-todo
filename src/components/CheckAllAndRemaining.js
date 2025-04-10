import React from 'react';

const CheckAllAndRemaining = ({remainingCount, checkAll}) => {
    return (
        <div>
            <div className="check-all-container">
                <div>
                    <div className="button" onClick={checkAll} >Check All</div>
                </div>

                <span>{remainingCount} item{ remainingCount > 1 ? 's' : ''} remaining</span>
            </div>
        </div>
    );
}

export default CheckAllAndRemaining;
