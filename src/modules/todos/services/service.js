import { todosApi } from './api';

export function get() {
    return todosApi.get();
}

export function remove(id) {
    return todosApi.delete(id);
}

export function post(newTodo) {
    return todosApi.post('', newTodo);
}

export function put(todo, id) {
    return todosApi.put(id, todo);
}
