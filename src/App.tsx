import React from 'react';
import './App.css';
import { createStore, Reducer } from 'redux';

const initialState = 0;

// Action どんな変化が起きるかを定義する
const increment = () => {
  return {
    type: "INCREMENT"
  }
}

const decrement = () => {
  return {
    type: "DECREMENT"
  }
}

// Reducer やってきたアクションに応じてどう変化するかを定義する
const counterReducer = (state: number = initialState, action: any) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state -1;
    default:
      return state;
  }
}

// Store アプリケーションの状態を保持する
let store = createStore(counterReducer);

// コンソールに表示する
store.subscribe(() => console.log(store.getState()));

// actionをstoreにdispatchする
store.dispatch(increment());

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
    </div>
  );
}

export default App;
