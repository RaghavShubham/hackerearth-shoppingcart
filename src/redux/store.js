import {createStore} from 'redux';
import {CartReducers} from './reducers';

export default createStore(CartReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

