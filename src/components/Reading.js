import React, { useContext } from 'react'
import moment from 'moment'
import ReadingsContext from '../context/readings-context'

const Reading = ({ reading }) => {
  const { dispatch } = useContext(ReadingsContext)

  return (
    <div>
      <h3>Date: {moment(reading.date).format('DD-MM-YYYY')}</h3>
      <p>Day reading: {reading.dayReading}</p>
      <p>Night reading: {reading.nightReading}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_READING', date: reading.date})}>Remove</button>
    </div>
  )
}

export default Reading