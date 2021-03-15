import React, { useState, useEffect } from 'react';
import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from '../services/todosService';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todos() {

    let [listState, setList] = useState([]);

    let toggleItem = (id) => {
        const item = listState.find((l) => l.id === id);
        const newItem = { ...item, completed: !item.completed };

        updateTodo(newItem).then(() => {

            setList(listState.map((item) => item.id !== id ? item : newItem));
        });
    };

    let deleteItem = (id) => {
        deleteTodo(id);

        setList(listState.filter((item) => item.id !== id));
    };

    let createItem = (newItem) => {
        newItem.completed = false;

        createTodo(newItem).then((data) => {
            setList([...listState, data]);
        });
    };

    useEffect(() => {
        getTodos().then((list) => {
            setList(list);
        });
    }, []);

    return (
        <>
            <TodoList
                list={listState}
                onToggle={toggleItem}
                onDelete={deleteItem}
            />
            <TodoForm onSave={createItem} />
        </>
    );
}
