import React, { useContext } from 'react'
import Reading from './Reading'
import ReadingsContext from '../context/readings-context'

const ReadingsList = () => {
  const { readings } = useContext(ReadingsContext)
  const sortedReadings = readings.sort((a ,b) => {
    if ( a.date > b.date ) {
      return -1
    } if (a.date < b.date ) {
      return 1
    } else {
      return 0
    }
  })

  return sortedReadings.map((reading) => (
    <Reading key={reading.id} reading={reading} />
  ))
}

export default ReadingsList 