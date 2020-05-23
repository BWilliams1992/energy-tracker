import { createStore, combineReducers } from 'redux'
import readingsReducer from '../reducers/readings'
import settingsReducer from '../reducers/settings'

export default () => {
  const store = createStore(
    combineReducers({
      readings: readingsReducer,
      settings: settingsReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}