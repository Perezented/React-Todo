import React from 'react';
class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItem: '',
        };
    }
    handleChanges = (event) => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };
    submitTodo = (event) => {
        event.preventDefault();
        this.props.addItem(event, this.state.todoItem);
        this.setState({ todoItem: '' });
    };
    render() {
        console.log('yooooooo kiiiiiddd', this.state);
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
