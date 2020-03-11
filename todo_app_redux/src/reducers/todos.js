import UUID from 'uuid-js';
import { constants } from '../actions/todos';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.CREATE_TDO:
      const newTodo = {
        ...action.payload,
      }
      return [...state, newTodo];
    default:
      return state;
  }
  return state;
}
