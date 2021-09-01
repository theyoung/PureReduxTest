//state
let state = {
    todos:["hahahahahha","hehehehheh"]
}

//action
const ADD_TODO_LIST = 'ADD_TODO_LIST';

//reducer
// function reducer_addTodoList(state = {}, action){
//     switch(action.type){
//         case ADD_TODO_LIST:
//             let newTodo = {};
//             newTodo[action.payload.count] = action.payload.todo;
//             return {...state, ...newTodo}
//         default:
//             return state;
//     }
// }

function todos(state = {}, action) {
    console.log(state)
    switch (action.type) {
      case 'ADD_TODO':
        state.todos.push(action.todoStr);
        return state;
      default:
        return state;
    }
  }
// function counter(state = 0, action) {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1
//       case 'DECREMENT':
//         return state - 1
//       default:
//         return state
//     }
// }
// const reducersTodo = Redux.combineReducers({
//     todos:todos, counter: counter
// });
// export default Redux.createStore(reducersTodo,state);
export default Redux.createStore(todos,state);