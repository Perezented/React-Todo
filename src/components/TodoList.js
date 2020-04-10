// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log(props);
    return (
        <section>
            {props.todoList.map((item) => {
                console.log(item);
                return (
                    <Todo
                        key={item.id}
                        item={item}
                        toggleItem={props.toggleItem}
                    />
                );
            })}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </section>
    );
};
export default TodoList;
