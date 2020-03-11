import Constants from './constants'

export const constants = new Constants({
  CREATE_TODO: 'CREATE_TODO'
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
