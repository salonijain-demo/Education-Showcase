import {createStore, applyMiddleware} from 'redux';
import Reducer from './education/reducer';

const store = createStore(Reducer,applyMiddleware())
export default store;