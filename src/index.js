import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter'
import './components/styles/styles.css'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx ,document.getElementById('root'));

store.subscribe(() => {
  localStorage.setItem('energy-app',JSON.stringify(store.getState()))
  console.log(JSON.parse(localStorage.getItem('energy-app')).readings)
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
