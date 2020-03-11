import UUID from 'uuid-js';
export default (store) => (next) => (action) => {

  action.payload.id = UUID.create().toString();
  const result = next(action);
  // console.log(store.getState());
  return result;
}
//

// function() {
//   returns function() {
//     returns function() {
//
//     }
//   }
// }
