import React, { useContext } from 'react'
import moment from 'moment'
import ReadingsContext from '../context/readings-context'

const ReadingsOptions = () => {
  const { readings } = useContext(ReadingsContext)
  return (
    readings.map((reading) => {
      return <option key={reading.id} value={reading.id}>{moment(reading.date).format('DD-MM-YYYY')}</option>
    })
  )
}

export default ReadingsOptions