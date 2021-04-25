import React from 'react';
import { Provider } from 'react-redux';
import Todos from './modules/todos/components/Todos';
import store from './modules/todos/store/store';

export default function App() {
    return (
        <Provider store={store}>
            <Todos />
        </Provider>
    );
}
