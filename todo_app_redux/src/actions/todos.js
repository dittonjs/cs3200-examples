import Constants from './constants'

export const constants = new Constants({
  CREATE_TODO: 'CREATE_TODO',
  GET_TODOS: 'GET_TODOS',
  GET_TODOS_DONE: 'GET_TODOS_DONE',
  DELETE_TODO: 'DELETE_TODO',
})

export const createTodo = (title, description, startTime, duration) => ({
  type: constants.get("CREATE_TODO"),
  payload: {
    title,
    description,
    startTime,
    duration,
  }
});

export const getTodos = () => ({
  type: constants.get('GET_TODOS'),
})

export const deleteTodo = (id) => ({
  type: constants.get('DELETE_TODO'),
  id
})
