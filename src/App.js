import React from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todoList = [
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
    constructor() {
        super();
        this.state = {
            todoList,
        };
    }
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        return (
            <div>
                <div>
                    <h2>Stuff ya need todo...</h2>
                    <TodoForm />
                </div>
                <div>
                    <TodoList />
                    <Todo />
                </div>
            </div>
        );
    }
}

export default App;
