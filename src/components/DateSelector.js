import React, { useContext} from 'react'
import moment from 'moment'
import ReadingsContext from '../context/readings-context'

const DateSelector = (props) => {
  const { readings } = useContext(ReadingsContext)
  return (
    <select>
      {
        readings.map((reading) => {
          return <option key={reading.id} value={reading.id}>{moment(reading.date).format('DD-MM-YYYY')}</option>
        })
      }
    </select>
  )
}

export default DateSelector