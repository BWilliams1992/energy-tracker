import React, { useEffect, useReducer} from 'react'
import readingsReducer from '../reducers/readings'
import settingsReducer from '../reducers/settings'
import ReadingsContext from '../context/readings-context'
import ReadingsList from './ReadingsList'
import ReadingForm from './ReadingForm'
import Bill from './Bill'
import Settings from './Settings'

import './styles/styles.css'

const EnergyTrackerApp = () => {
  const [ readings, dispatch ] = useReducer(readingsReducer, [] )

  const [ settings, settingsDispatch ] = useReducer(settingsReducer, { } )

  useEffect(() => {
    const readings = JSON.parse(localStorage.getItem('readings'))
    if (readings) {
      dispatch({ type: 'POPULATE_READINGS', readings})
    }
  },[])

  useEffect(() => {
    const settings = JSON.parse(localStorage.getItem('settings'))
    if (settings) {
      settingsDispatch({type: 'POPULATE_SETTINGS', settings})
    }
  },[])

  useEffect(() => {
    localStorage.setItem('readings', JSON.stringify(readings))
  },[readings])

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings))
  },[settings])

  return (
    <ReadingsContext.Provider value={{ readings, dispatch, settings, settingsDispatch }}>
      <Bill />
      <Settings />
      <ReadingForm />
      <ReadingsList />
    </ReadingsContext.Provider>
  )
}

export default EnergyTrackerApp