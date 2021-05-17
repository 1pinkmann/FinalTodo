import { ListItem, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React from 'react';
import { connect } from 'react-redux';
import { handleRemoveTodo, handleToggleTodo } from './../store/actions/actions';

function TodoListItem({ item, handleToggleTodo, handleRemoveTodo }) {

    let onItemClick = () => {
        handleToggleTodo(item);
    };

    let onDeleteBtnClick = (e) => {
        e.stopPropagation();

        handleRemoveTodo(item.id);
    };

    return (
        <ListItem button onClick={onItemClick} style={getItemStyle(item)} className="border-top">
            <ListItemText>{item.title}</ListItemText>
            <span onClick={onDeleteBtnClick}>
                <HighlightOffIcon />
            </span>
        </ListItem>
    );
}

function getItemStyle({ isDone }) {
    return {
        cursor: 'pointer',
        backgroundColor: isDone ? 'green' : 'yellow',
        color: isDone ? '#ffffff' : '#000000',
    };
}

let mapDispatchToProps = {
    handleRemoveTodo,
    handleToggleTodo
}

export default connect(null, mapDispatchToProps)(TodoListItem);
