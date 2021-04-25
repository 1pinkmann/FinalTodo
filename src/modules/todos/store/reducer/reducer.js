import { ACTION_UPDATE_TODO, ACTION_DELETE_TODO, ACTION_CREATE_TODO, ACTION_TOGGLE_TODO } from './../actions/actions';

const getEmptyTodo = () => {
    return { title: '', completed: false, id: Math.random() }
};

const initialState = {
    todos: [
        { title: 'Todo 1', completed: false, id: 1 },
        { title: 'Todo 2', completed: true, id: 2 },
        { title: 'Todo 3', completed: true, id: 3 },
        { title: 'Todo 4', completed: false, id: 4 }
    ],
    todo: getEmptyTodo()
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_DELETE_TODO:
            return { ...state, todos: state.todos.filter((item) => item.id !== payload) }

        case ACTION_UPDATE_TODO:
            return { ...state, todo: payload }

        case ACTION_CREATE_TODO:
            return { ...state, todos: [...state.todos, payload], todo: getEmptyTodo() }

        case ACTION_TOGGLE_TODO:
            const item = state.todos.find((todo) => todo.id === payload);
            const newItem = { ...item, completed: !item.completed };
            return { ...state, todos: state.todos.map((todo) => todo.id !== payload ? todo : newItem) }

        default:
            return state;
    }
}