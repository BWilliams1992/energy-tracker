import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

store.dispatch({
  type:'ADD_READING',
  reading:{
    id:1,
    date:0,
    dayReading:0,
    nightReading:0
  }
})
store.dispatch({
  type:'ADD_READING',
  reading:{
    id:2,
    date:100000000,
    dayReading:1000,
    nightReading:1000
  }
})
store.dispatch({
  type:'ADD_READING',
  reading:{
    id:3,
    date:200000000,
    dayReading:2000,
    nightReading:2000
  }
})

store.dispatch({
  type:'SET_SETTINGS',
  settings:{
    dayRate:10,
    nightRate:10,
    standingCharge:10
  }
})

ReactDOM.render(jsx ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
