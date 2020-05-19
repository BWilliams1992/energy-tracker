import React, { useContext } from 'react'
import Reading from './Reading'
import ReadingsContext from '../context/readings-context'

const ReadingsList = () => {
  const { readings } = useContext(ReadingsContext)

  return readings.map((reading) => (
    <Reading key={reading.date} reading={reading} />
  ))
}

export default ReadingsList 