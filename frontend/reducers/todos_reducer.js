import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

// export const todosReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_TODOS:
//       return [...state, ...action.todos];
//     case RECEIVE_TODO:
//       return [...state, action.todo];
//     default:
//       return state;
//   }
// };

export default todosReducer;
