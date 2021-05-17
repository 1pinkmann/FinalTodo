import axios from 'axios';
import { TODOS_URL } from './constants';

export const todosApi  = axios.create({
    baseURL: TODOS_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})