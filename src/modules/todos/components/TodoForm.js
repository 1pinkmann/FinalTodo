import React from 'react';
import { createTodo, updateTodo } from '../store/actions/actions';
import { connect } from 'react-redux';
import { Box, Button, TextField } from '@material-ui/core';

function TodoForm({ todo, dispatch }) {

    let onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo(todo));
    };

    let onInputChange = (e) => {
        dispatch(updateTodo({ ...todo, [e.target.name]: e.target.value }))
    };

    return (
        <Box component="form" display="flex" flexDirection="column" alignItems="center" mt={2} onSubmit={onFormSubmit}>
            <TextField
                type="text"
                name="title"
                value={todo.title}
                onChange={onInputChange}
                label="Add Todo"
            />
            <Box mt={2}>
                <Button variant="outlined" type="submit">Save</Button>
            </Box>
        </Box>
    );
}

function mapStateToProps(state) {
    return { todo: state.todo }
}

export default connect(mapStateToProps)(TodoForm);
