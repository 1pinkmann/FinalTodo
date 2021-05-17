import { List } from '@material-ui/core';
import React from 'react';
import TodoListItem from './TodoListItem';

export default function TodoList(props) {
    return (
        <List component="ul">
            {props.list.map((item) => (
                <TodoListItem
                    key={item.id}
                    item={item}
                />
            ))}
        </List>
    );
}
