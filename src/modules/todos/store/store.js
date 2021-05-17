import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/reducer';

const enchancer = applyMiddleware(thunk);
const store = createStore(reducer, enchancer);

export default store;