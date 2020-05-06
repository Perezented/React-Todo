// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        console.log(this.props);
        return (
            <section>
                {this.props.todoList.map((item) => {
                    // console.log(item);
                    return (
                        <Todo
                            key={item.id}
                            item={item}
                            toggleItem={this.props.toggleItem}
                        />
                    );
                })}
                <button onClick={this.props.clearCompleted}>
                    Clear Completed
                </button>
            </section>
        );
    }
}
export default TodoList;
