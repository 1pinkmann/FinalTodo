import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList(props) {
    return (
        <ul>
            {props.list.map((item) => (
                <TodoListItem
                    key={item.id}
                    item={item}
                    onToggle={props.onToggle}
                    onDelete={props.onDelete}
                />
            ))}
        </ul>
    );
}
