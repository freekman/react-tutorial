/**
 * Created by clouway on 31.08.16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

const counter = (state = 0, action = "")=> {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

const Counter = ({value, onInc, onDec})=> (
  <div>
    <h1>{value}</h1>
    <button onClick={onInc}>+</button>
    <button onClick={onDec}>-</button>
  </div>
);

const store = createStore(counter);

const render = ()=> {
  ReactDOM.render(<Counter
    value={store.getState()}
    onInc = { ()=>{
     store.dispatch({type: 'increment'});
    }}
    onDec = { ()=>{
     store.dispatch({type: 'decrement'});
    }}
    />, document.getElementById('root'));
};

store.subscribe(render);
render();
