let nextTodoId = 0;

export const addTodo = (text)=> {
  return {
    type: 'add_todo',
    id: nextTodoId++,
    text
  }
};

export const toggleTodo = (id)=> {
  return {
    type: 'toggle_todo',
    id
  }
};

export const setVisibilityFilter = (filter)=> {
  return {
    type: 'set_visibility_filter',
    filter
  }
};
