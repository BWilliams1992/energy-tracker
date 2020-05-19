import React, { useContext} from 'react'
import moment from 'moment'
import ReadingsContext from '../context/readings-context'
import DateSelector from './DateSelector'

const Bill = () => {
  const { readings } = useContext(ReadingsContext)
  if (readings.length >= 2) {
    const readingOne = (readings[0])
    const readingTwo = (readings[1])
    const bill = (readingOne, readingTwo) => {
      const dayCost = readingOne.dayReading - readingTwo.dayReading
      const nightcost = readingOne.nightReading - readingTwo.nightReading
      const r1Date = moment(readingOne.date)
      const r2Date = moment(readingTwo.date)
      const standingCharge=  r1Date.diff(r2Date,'days') * 22.63
      return (((dayCost * 15.85) + (nightcost * 8.65) + standingCharge)/100)
      }
    console.log(bill(readingOne,readingTwo))
    }
  return (
    <div>
      <p>start date</p>
      <DateSelector key="start-date" />
      <p>end date</p>
      <DateSelector key="end-date" />
      <div>
        <p>cost: £</p>
      </div>
    </div> 
  )
}

export default Bill