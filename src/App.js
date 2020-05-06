import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false,
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false,
    },
];

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    constructor() {
        super();
        this.state = {
            todos,
        };
    }

    addTodo = (todoName) => {
        console.log('AddingTodo', todoName);
        const newTodo = {
            task: todoName,
            id: Date.now(),
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    };

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                } else {
                    return todo;
                }
            }),
        });
    };

    clearCompleted = (e) => {
        this.setState({
            todos: this.state.todos.filter((todoItem) => !todoItem.completed),
        });
        e.preventDefault();
    };

    render() {
        console.log('todos', todos);
        return (
            <div>
                <h2>Welcome to a Todo App!</h2>
                <TodoForm addTodo={this.addTodo} />
                <div>
                    <TodoList
                        todos={this.state.todos}
                        toggleTodo={this.toggleTodo}
                        clearCompleted={this.clearCompleted}
                    />
                </div>
            </div>
        );
    }
}

export default App;
