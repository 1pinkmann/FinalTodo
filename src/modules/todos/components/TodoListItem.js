import { ListItem, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React from 'react';

export default function TodoListItem({ item, onToggle, onDelete }) {

    let onItemClick = () => {
        onToggle(item.id);
    };

    let onDeleteBtnClick = (e) => {
        e.stopPropagation();

        onDelete(item.id);
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

function getItemStyle({ completed }) {
    return {
        cursor: 'pointer',
        backgroundColor: completed ? 'green' : 'yellow',
        color: completed ? '#ffffff' : '#000000',
    };
}
