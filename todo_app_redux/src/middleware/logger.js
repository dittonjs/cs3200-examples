export default (store) => (next) => (action) => {
  console.log("dispatching: ", action.type);
  const result = next(action);
  console.log("store done updating")
  return result;
}
