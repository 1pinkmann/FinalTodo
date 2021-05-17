import React from 'react';
import { handleSaveTodo } from '../store/actions/actions';
import { connect } from 'react-redux';
import { Box, Button, Paper } from '@material-ui/core';
import { Form, Formik } from 'formik';
import CustomTextField from '../../../common/CustomTextField';
import CustomButton from '../../../common/CustomButton';

let formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
}

let paperStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px',
    height: '300px',
    padding: '30px 60px',
    boxSizing: 'border-box'
}

let titleStyles = {
    textTransform: 'uppercase',
    fontSize: '22px',
    opacity: '0.8',
    marginBottom: '20px'
}

let buttonsStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: '100%'
}

let selectStyles = {
    width: '100%',
    margin: '10px 0'
}

function TodoForm({ handleSaveTodo, showForm, handleShowForm }) {

    let initialValues = {
        title: '',
        isDone: false,
    };

    let onSubmit = async (todo, { resetForm }) => {
        await handleSaveTodo(todo);
        handleShowForm();
        resetForm();
    };

    function handleCancel({resetForm}) {
        handleShowForm();
        resetForm();
    }

    return (
        <div className={"modal-window" + (showForm ? " opened" : "")}>
            <Paper style={paperStyles}>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
                    {(formik) => {
                        return (
                            <Box style={formStyles} component={Form}>
                                <h1 style={titleStyles}>Add Todo</h1>
                                <CustomTextField name="title" as="input" label="Title" placeholder="Enter title" />
                                <CustomTextField name="isDone" as="select" style={selectStyles} />
                                <Box style={buttonsStyles} mt={2} >
                                    <CustomButton variant="outlined" type="submit">Save</CustomButton>
                                    <Button variant="contained" type="button" onClick={()=>handleCancel(formik)}>Cancel</Button>
                                </Box>
                            </Box>
                        );
                    }}
                </Formik>
            </Paper>
        </div>
    );
}

function validate(values) {
    let errors = {};

    if (!values.title) {
        errors.title = 'Title is  required';
    }

    if (values.title.length > 255) {
        errors.title = 'Title is too long';
    }

    return errors;
}

function mapStateToProps(state) {
    return { todo: state.todo }
}

let mapDispatchToProps = {
    handleSaveTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
