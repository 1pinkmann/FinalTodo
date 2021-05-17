import { List } from '@material-ui/core';
import React from 'react';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';

function TodoList({todos}) {
    return (
        <List component="ul">
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </List>
    );
}

function mapStateToProps(state) {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);
