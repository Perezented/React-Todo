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
    addItem = (e, todoItem) => {
        e.preventDefault();
        const newTodo = {
            name: todoItem,
            id: Date.now(),
            completed: false,
        };
        this.setState({
            todoList: [...this.state.todoList, newTodo],
        });
    };
    toggleCompleted = (todoId) => {
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                if (todoId === todo.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            }),
        });
    };
    clearCompleted = (e) => {
        e.preventDefault();
        this.setState({
            todoList: this.state.todoList.filter((todo) => !todo.completed),
        });
    };
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        return (
            <div>
                <div>
                    <h2>Stuff ya need todo...</h2>
                    <TodoForm addItem={this.addItem} />
                </div>
                <div>{/* <TodoList />
                    <Todo /> */}</div>
            </div>
        );
    }
}

export default App;
