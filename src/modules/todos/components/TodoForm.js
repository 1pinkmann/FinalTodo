import React, { useState } from 'react';

export default function TodoForm (props) {

    let [todo, setTodo] = useState({title: ''})

    let onFormSubmit = (e) => {
        e.preventDefault();

        props.onSave(todo);
        setTodo({ title: '' })
    };

    let onInputChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="title"
                value={todo.title}
                onChange={onInputChange}
            />
            <button>Save</button>
        </form>
    );
}
