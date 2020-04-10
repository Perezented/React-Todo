import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItem: '',
        };
    }
    handleChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    submitTodo = (event) => {
        event.preventDefault();
        this.setState({ todoItem: '' });
        this.props.addItem(event, this.state.todoItem);
    };
    render() {
        return (
            <section>
                <form onSubmit={this.submitTodo}>
                    <input
                        type="text"
                        className="addTodo"
                        value={this.state.todoItem}
                        name="todoItem"
                        onChange={this.handleChanges}
                    />
                    <div>
                        <button>Add Todo</button>
                    </div>
                </form>
            </section>
        );
    }
}
export default TodoForm;
