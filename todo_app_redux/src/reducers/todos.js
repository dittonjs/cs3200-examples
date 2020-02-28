import UUID from 'uuid-js';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newTodo = {
        ...action.payload,
        id: UUID.create().toString(),
      }
      return [...state, newTodo];
    default:
      return state;
  }
  return state;
}
