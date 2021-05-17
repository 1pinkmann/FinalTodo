import React, { useState } from 'react';
import { handleSaveTodo } from '../store/actions/actions';
import { connect } from 'react-redux';
import { Box, Button, TextField } from '@material-ui/core';

function TodoForm({ todo, handleSaveTodo }) {

    const [todoState, setTodoState] = useState(
        todo || {
            title: '',
            isDone: false,
        }
    );

    let onFormSubmit = (e) => {
        e.preventDefault();
        handleSaveTodo(todoState);
    };

    let onInputChange = (e) => {
        setTodoState({
            ...todoState, [e.target.name]: e.target.value
        });
    };

    return (
        <Box component="form" display="flex" flexDirection="column" alignItems="center" mt={2} onSubmit={onFormSubmit}>
            <TextField
                type="text"
                name="title"
                value={todoState.title}
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

let mapDispatchToProps = {
    handleSaveTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
