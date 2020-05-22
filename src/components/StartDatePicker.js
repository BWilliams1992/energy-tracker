import React, { useContext } from 'react'
import ReadingsContext from '../context/readings-context'
import BillsContext from '../context/bills-context'
import ReadingsOptions from './ReadingsOptions'

const DatePicker = (props) => {
  const { readings } =useContext(ReadingsContext)
  const { setReadingOne } =useContext(BillsContext)

  return (
    <select className="selector" id='reading-one-selector' onChange={(e) => {
      const readingIndex = readings.findIndex((reading) => reading.id === e.target.value)
      setReadingOne(readings[readingIndex])
    }}>
      <option>Start Date</option>
      <ReadingsOptions />
    </select>
  )
}

export default DatePicker