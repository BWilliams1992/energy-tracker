import { createStore, combineReducers } from 'redux'
import readingsReducer from '../reducers/readings'
import settingsReducer from '../reducers/settings'
import billsReducer from '../reducers/bills'

const persistedData = () => {
  const readings = JSON.parse(localStorage.getItem('energy-app')).readings
  const settings = JSON.parse(localStorage.getItem('energy-app')).settings
  return {
    readings,
    settings
  }
}

export default () => {
  const store = createStore(
    combineReducers({
      readings: readingsReducer,
      settings: settingsReducer,
      bills: billsReducer
    }),persistedData(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}