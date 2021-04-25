import React from 'react';

export default function TodoListItem ({item, onToggle, onDelete}) {

    let onItemClick = () => {
        onToggle(item.id);
    };

    let onDeleteBtnClick = (e) => {
        e.stopPropagation();

        onDelete(item.id);
    };

    return (
        <li onClick={onItemClick} style={getItemStyle(item)}>
            {item.title}
            <span onClick={onDeleteBtnClick}>X</span>
        </li>
    );
}

function getItemStyle({ completed }) {
    return {
        cursor: 'pointer',
        backgroundColor: completed ? 'green' : 'yellow',
    };
}
