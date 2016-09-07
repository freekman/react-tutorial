import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import TodoList from '../components/TodoList.js'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'show_all':
      return todos;
    case 'show_completed':
      return todos.filter(t => t.completed);
    case 'show_active':
      return todos.filter(t => !t.completed)
  }
};

const mapStateToProps = (store) => {
  return {
    todos: getVisibleTodos(store.todos, store.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList
