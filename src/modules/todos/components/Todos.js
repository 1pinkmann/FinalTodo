import { Container, Paper, Box, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { fetchTodos } from './../store/actions/actions';
import store from './../store/store';

export default function Todos() {

    const [showForm, setShowForm] = useState(false);

    function handleShowForm() {
        setShowForm(!showForm);
    }

    useEffect(() => {
        store.dispatch(fetchTodos());
    }, [])

    return (
        <Container maxWidth="sm">
            <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
                <Paper className="padding w100" elevation={3}>
                    <TodoList />
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="primary" onClick={handleShowForm}>Add Todo</Button>
                    </Box>
                </Paper>
                <TodoForm showForm={showForm} handleShowForm={handleShowForm}/>
            </Box>
        </Container>
    );
}
