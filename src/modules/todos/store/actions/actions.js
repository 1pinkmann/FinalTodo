export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO';
export const ACTION_UPDATE_TODO = 'ACTION_UPDATE_TODO';
export const ACTION_CREATE_TODO = 'ACTION_CREATE_TODO';
export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO';

export function deleteTodo(id) {
    return { type: ACTION_DELETE_TODO, payload: id }
}

export function updateTodo(item) {
    return { type: ACTION_UPDATE_TODO, payload: item }
}

export function createTodo(newItem) {
    return { type: ACTION_CREATE_TODO, payload: newItem }
}

export function toggleTodo(id) {
    return { type: ACTION_TOGGLE_TODO, payload: id }
}