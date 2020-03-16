import UUID from 'uuid-js';
export default (store) => (next) => (action) => {
  if (action.payload) {
    action.payload.id = UUID.create().toString();
  }
  const result = next(action);
  return result;
}

// MIDDLEWARE IS A FUNCTION THAT RETURNS A FUNCTION THAT RETURNS A FUNCTION
// function() {
//   returns function() {
//     returns function() {
//
//     }
//   }
// }
