import React from 'react';
import { createTodo, updateTodo } from '../store/actions/actions';
import { connect } from 'react-redux';

function TodoForm ({todo, dispatch}) {

    let onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo(todo));
    };

    let onInputChange = (e) => {
        dispatch(updateTodo({ ...todo, [e.target.name]: e.target.value }))
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={onInputChange}
            />
            <button>Save</button>
        </form>
    );
}

function mapStateToProps(state) {
    return { todo: state.todo }
}

export default connect(mapStateToProps)(TodoForm);
