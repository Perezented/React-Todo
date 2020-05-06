import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '',
        };
    }

    handleChanges = (e) => {
        this.setState({ keyword: e.target.value }, () => {
            console.log('Keyword', this.state.keyword);
        });
    };
    submitForm = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.keyword);
        this.setState({ keyword: '' });
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="todo"
                    value={this.state.keyword}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}
