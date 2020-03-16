import AsyncStorage from '@react-native-community/async-storage';
import { constants } from '../actions/todos';

export default (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === constants.get('GET_TODOS')) {
    AsyncStorage
      .getItem('@todos')
      .then((todosJson) => {
        let todos = [];
        if (todosJson) {
          todos = JSON.parse(todosJson);
        }
        store.dispatch({
          type: constants.get('GET_TODOS_DONE'),
          payload: todos,
        });
      })
      .catch(console.log);
  } else if(action.type !== constants.get('GET_TODOS_DONE')) {
    AsyncStorage
      .setItem('@todos', JSON.stringify(store.getState().todos))
      .catch(console.log)
  }
  return result;
}
