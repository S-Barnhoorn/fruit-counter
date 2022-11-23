import React from 'react';

const Counter = ({clickDecrement, clickIncrement, type, counter, fruitName, disabled}) => {
    return (
        <div>
            <h1>{fruitName}</h1>
            <button
                type={type}
                onClick={clickDecrement}
                disabled={disabled}
            >-</button>
            {counter}
            <button
                type={type}
                onClick={clickIncrement}
            >+</button>

        </div>
    );
};

export default Counter;