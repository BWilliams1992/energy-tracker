import React, { useEffect, useReducer} from 'react'
import readingsReducer from '../reducers/readings'
import ReadingsContext from '../context/readings-context'
import ReadingsList from './ReadingsList'
import ReadingForm from './ReadingForm'
import Bill from './Bill'

import './styles/styles.css'

const EnergyTrackerApp = () => {
  const [ readings, dispatch ] = useReducer(readingsReducer, [] )

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
      <Bill />
      <ReadingForm />
      <ReadingsList />
    </ReadingsContext.Provider>
  )
}

export default EnergyTrackerApp