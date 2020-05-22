import React, { useContext } from 'react'
import moment from 'moment'
import ReadingsContext from '../context/readings-context'
import BillsContext from '../context/bills-context'

const DatePicker = (props) => {
  const { readings } =useContext(ReadingsContext)
  const { setReadingTwo } =useContext(BillsContext)

  return (
    <select className="selector" id='reading-one-selector' onChange={(e) => {
      const readingIndex = readings.findIndex((reading) => reading.id === e.target.value)
      setReadingTwo(readings[readingIndex])
    }}>
      <option>End Date</option>
      {
        readings.map((reading) => {
        return <option key={reading.id} value={reading.id}>{moment(reading.date).format('DD-MM-YYYY')}</option>
      })
    }
    </select>
  )
}

export default DatePicker