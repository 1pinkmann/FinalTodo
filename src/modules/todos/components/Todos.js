import { Container, Paper, Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeTodoAction, toggleTodo } from '../store/actions/actions';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { fetchTodos } from './../store/actions/actions';
import store from './../store/store';

function Todos({ todos, toggleTodo, removeTodoAction }) {

    useEffect(() => {
        store.dispatch(fetchTodos());
    }, [])
  
    let toggleItem = (id) => {
        toggleTodo(id);
    };

    let handleDeleteTodo = (id) => {
        removeTodoAction(id);
    };

    return (
        <Container maxWidth="sm">
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <Paper className="padding w100" elevation={3}>
                    <TodoList list={todos}/>
                    <TodoForm />
                </Paper>
            </Box>
        </Container>
    );
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

let mapDispatchToProps = {
    toggleTodo,
    removeTodoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
