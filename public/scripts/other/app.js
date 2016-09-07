//import React from 'react';
//import ReactDOM from 'react-dom';
//import { createStore, combineReducers } from 'redux';
//import  deepFreeze  from 'deep-freeze';
//
////const addCounter = (list)=> {
////  return [...list, 0]
////};
////
////const removeCounter = (list, index)=> {
////  return [...list.slice(0, index), ...list.slice(index + 1)]
////};
////
////const incCounter = (list, index)=> {
////  return [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)]
////};
////
////const testAddCounter = ()=> {
////  const lB = [];
////  const lA = [0];
////
////  deepFreeze(lB);
////
////  expect(addCounter(lB)).toEqual(lA);
////};
////
////const testRemoveCounter = ()=> {
////  const lB = [1, 2, 3];
////  const lA = [1, 3];
////
////  deepFreeze(lB);
////
////  expect(removeCounter(lB, 1)).toEqual(lA);
////};
////
////const testIncCounter = ()=> {
////  const lB = [1, 2, 3];
////  const lA = [1, 3, 3];
////
////  deepFreeze(lB);
////
////  expect(incCounter(lB, 1)).toEqual(lA);
////};
////
////testAddCounter();
////testRemoveCounter();
////testIncCounter();
//
////const toggleTodo = (todo)=> {
////  return Object.assign({},todo, {
////    completed: !todo.completed
////  })
////};
////
////const testToggle = ()=> {
////  const toggleB = {
////    id: 0,
////    completed: false
////  };
////
////
////  const toggleA = {
////    id: 0,
////    completed: true
////  };
////
////  deepFreeze(toggleB);
////  expect(toggleTodo(toggleB)).toEqual(toggleA)
////};
////
////testToggle();
//const todo = (state, action)=> {
//    switch (action.type) {
//      case 'add_todo':
//        return {
//          id: action.id,
//          text: action.text,
//          completed: false
//        };
//      case 'toggle_todo':
//        if (state.id !== action.id) {
//          return state;
//        }
//
//        return Object.assign({}, state, {
//          completed: !state.completed
//        })
//
//          ;
//      default:
//        return state;
//    }
//  }
//  ;
//
//const todos = (state = [], action = {}) => {
//  switch (action.type) {
//    case "add_todo":
//      return [
//        ...state, // items from the old array; it will separate them and here will be inlcuded
//        todo(undefined, action)
//      ];
//    case "toggle_todo":
//      return state.map(t=> todo(t, action));
//    default:
//      return state;
//  }
//};
//
//const visibilityFilter = (state = 'show_all', action= {})=> {
//  switch (action.type) {
//    case 'set_visibility_filter':
//      return action.filter;
//    default :
//      return state;
//  }
//};
//
//const getVisibleTodos = (
//  todos,filter
//)=> {
//  switch (filter){
//    case 'show_all':
//      return todos;
//    case 'show_completed':
//      return todos.filter(
//        t =>{
//          t.completed
//        }
//      );
//    case 'show_active':
//      return todos.filter(
//        t=>!t.completed
//      );
//    default :
//      return todos
//  }
//};
//
//const todoApp = combineReducers({todos,visibilityFilter});
//const store = createStore(todoApp);
//let nID = 0;
//
//class TodoApp extends React.Component {
//
//  render() {
//    const visibleTodos = getVisibleTodos(
//      this.props.todos,
//      this.props.visibilityFilter
//    );
//    return (<div>
//      <input type="text" ref={ node => {
//        this.input = node
//      }}
//        />
//      <button onClick={()=>{
//
//    store.dispatch({type: 'add_todo', text : this.input.value, id: nID++});
//
//    this.input.value  ='';
//    }}>Add
//      </button>
//      <ul>
//        {visibleTodos.map(todo =>
//            <li key={todo.id}
//                onClick={()=>{
//                  store.dispatch({
//                  type:'toggle_todo',
//                   id: todo.id
//                   });
//                }}
//
//                style={{
//              textDecoration: todo.completed ? 'line-through':'none'
//              }}>
//              {todo.text}
//            </li>
//        )}
//      </ul>
//      <p>
//      Show:
//        {' '}
//        <FilterLink filter='show_all'>All</FilterLink>
//        {' '}
//        <FilterLink filter='show_active'>Active</FilterLink>
//        {' '}
//        <FilterLink filter='show_completed'>Completed</FilterLink>
//      </p>
//    </div>);
//  }
//}
//
//const FilterLink = ({
//  filter,
//  children
//  }) => {
//  return (
//    <a href="#"
//       onClick={
//      e=>{
//      e.preventDefault();
//      store.dispatch({
//      type:'set_visibility_filter',
//      filter
//      });
//      }}>
//      {children}
//    </a>
//  );
//};
//
//const render = ()=> {
//  ReactDOM.render(<TodoApp {...store.getState()}/>, document.getElementById('root'))
//};
//store.subscribe(render);
//render();
//
//
////const testAddTodo = ()=> {
////  const sb = [];
////  const action = {
////    type: 'add_todo',
////    id: 0,
////    text: "learn redux"
////  };
////
////  const sa = [{
////    id: 0,
////    text: "learn redux",
////    completed: false
////  }];
////
////
////  deepFreeze(sb);
////  deepFreeze(action);
////
////  expect(todos(sb, action)).toEqual(sa)
////};
////
////const testToggleTodo = ()=> {
////  const sb = [{
////    id: 0,
////    text: "Learn Redux",
////    completed: false
////  }, {
////    id: 1,
////    text: "just do it",
////    completed: false
////  }];
////  const action = {
////    type: 'toggle_todo',
////    id: 1
////  };
////
////  const sa = [{
////    id: 0,
////    text: "Learn Redux",
////    completed: false
////  }, {
////    id: 1,
////    text: "just do it",
////    completed: true
////  }];
////
////
////  deepFreeze(sb);
////  deepFreeze(action);
////
////  expect(todos(sb, action)).toEqual(sa)
////};
