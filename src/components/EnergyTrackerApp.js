import React, { useEffect, useReducer} from 'react'
import readingsReducer from '../reducers/readings'
import ReadingsList from './ReadingsList'
import ReadingForm from './ReadingForm'
import ReadingsContext from '../context/readings-context'

const EnergyTrackerApp = () => {
  const [ readings, dispatch ] = useReducer(readingsReducer,[])

  useEffect(() => {
    const readings = JSON.parse(localStorage.getItem('readings'))

    if (readings) {
      dispatch({ type: 'POPULATE_READINGS', readings})
    }
  },[])

  useEffect(() => {
    localStorage.setItem('readings', JSON.stringify(readings))
  },[readings])

  return (
    <ReadingsContext.Provider value={{ readings, dispatch }}>
      <h1>Energy Tracker</h1>
      <ReadingsList />
      <ReadingForm />
    </ReadingsContext.Provider>
  )
}

export default EnergyTrackerApp