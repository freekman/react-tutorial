const todo = (state = {}, action = {})=> {
  switch (action.type) {
    case 'add_todo':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'toggle_todo':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {completed: !state.completed});
    default :
      return state;
  }
};

const todos = (state = [], action = {})=> {
  switch (action.type) {
    case 'add_todo':
      return [...state, todo(undefined, action)];
    case 'toggle_todo':
      return state.map(t=>todo(t, action));
    default :
      return state
  }
};

export default todos
