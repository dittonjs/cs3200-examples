import { createStore, combineReducers, applyMiddleware } from 'redux';
import todos from '../reducers/todos';
import idAssigner from '../middleware/id_assigner';
import storage from '../middleware/storage';

export default createStore(
  combineReducers({
    todos
  }),
  applyMiddleware(
    idAssigner,
    storage,
  ),
);
