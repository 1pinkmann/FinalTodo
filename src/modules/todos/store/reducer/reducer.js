import { ACTION_DELETE_TODO, ACTION_CREATE_TODO, ACTION_TOGGLE_TODO, ACTION_GET_TODOS } from './../actions/actions';

const initialState = {
    todos: [],
    todo: null
};

export default function reducer(state = initialState, { type, payload }) {

    switch (type) {

        case ACTION_GET_TODOS:
            return {...state, todos: payload}

        case ACTION_DELETE_TODO:
            return { ...state, todos: state.todos.filter((item) => item.id !== payload) }

        case ACTION_CREATE_TODO:
            return { ...state, todos: [...state.todos, payload] }

        case ACTION_TOGGLE_TODO:
            const item = state.todos.find((todo) => todo.id === payload.id);
            const newItem = { ...item, isDone: !item.isDone };
            return { ...state, todos: state.todos.map((todo) => todo.id !== payload.id ? todo : newItem) }

        default:
            return state;
    }
}