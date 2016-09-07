const visibilityFilter = (state = 'show_all', action = {})=> {
  switch (action.type) {
    case  'set_visibility_filter':
      return action.filter;
    default:
      return state
  }
};

export default visibilityFilter;
