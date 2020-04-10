import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

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

    toggleItem = (itemId) => {
        console.log(itemId);
        this.setState({
            todoList: this.state.todoList.map((todo) => {
                if (itemId === todo.id) {
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
            todoList: this.state.todoList.filter(
                (todoItem) => !todoItem.completed
            ),
        });
    };
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        return (
            <div className="App">
                <div>
                    <h2>Stuff ya need todo...</h2>
                    <TodoForm addItem={this.addItem} />
                </div>
                <div>
                    <TodoList
                        todoList={this.state.todoList}
                        toggleItem={this.toggleItem}
                        clearCompleted={this.clearCompleted}
                    />
                </div>
            </div>
        );
    }
}

export default App;
