import { Container, Paper, Box } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { createTodo, deleteTodo, toggleTodo, updateTodo } from '../store/actions/actions';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos({ todos, dispatch }) {

    let toggleItem = (id) => {
        dispatch(toggleTodo(id))
    };

    let handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    };

    let handleCreateTodo = (newTodo) => {
        dispatch(createTodo(newTodo))
    };

    let handleUpdateTodo = (todo) => {
        dispatch(updateTodo(todo))
    };

    return (
        <Container maxWidth="sm">
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <Paper className="padding w100" elevation={3}>
                    <TodoList
                        list={todos}
                        onToggle={toggleItem}
                        onDelete={handleDeleteTodo}
                        onChange={handleUpdateTodo}
                    />
                    <TodoForm onSave={handleCreateTodo} />
                </Paper>
            </Box>
        </Container>
    );
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(Todos);
