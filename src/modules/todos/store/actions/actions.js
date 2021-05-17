import { get, put, post, remove } from './../../services/service';

export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export function removeTodoAction(payload) {
    return { type: ACTION_DELETE_TODO, payload }
}

export const ACTION_UPDATE_TODO = 'ACTION_UPDATE_TODO';
export function updateTodo(payload) {
    return { type: ACTION_UPDATE_TODO, payload }
}

export const ACTION_CREATE_TODO = 'ACTION_CREATE_TODO';
export function createTodo(payload) {
    return { type: ACTION_CREATE_TODO, payload }
}

export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';
export function toggleTodo(payload) {
    return { type: ACTION_TOGGLE_TODO, payload }
}

export const ACTION_GET_TODOS = 'ACTION_GET_TODOS';
export const getTodosAction = (payload) => {
    return { type: ACTION_GET_TODOS, payload }
}

export const fetchTodos = () => (dispatch) => {
    get().then(({ data }) => {
        dispatch(getTodosAction(data));
    });
}

export const handleSaveTodo = (todo) => (dispatch) => {
    post(todo).then(({data}) => dispatch(createTodo(data)));
}

export const handleToggleTodo = (todo) => (dispatch) => {
    let id = todo.id;
    put(todo, id).then(() => dispatch(toggleTodo(todo)));
}

export const handleRemoveTodo = (id) => (dispatch) => {
    remove(id).then(() => dispatch(removeTodoAction(id)));
}