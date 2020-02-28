export const createTodo = (title, description, startTime, duration) => ({
  type: 'CREATE_TODO',
  payload: {
    title,
    description,
    startTime,
    duration,
  }
});
