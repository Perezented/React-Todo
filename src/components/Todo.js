import React from 'react';

const Todo = (props) => {
    console.log(props);
    return (
        <>
            {props.todoList.map((value) => {
                console.log(value);
                return <ul onClick={!value.task}>{value.task}</ul>;
            })}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </>
    );
};
export default Todo;
