import UUID from 'uuid-js';
import { constants } from '../actions/todos';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.get('CREATE_TODO'):
      const newTodo = {
        ...action.payload,
      }
      return [...state, newTodo];
    case constants.get('GET_TODOS_DONE'):
      return action.payload;
    default:
      return state;
  }
  return state;
}
