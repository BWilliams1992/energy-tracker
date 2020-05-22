import React, { useContext, useState, } from 'react'
import moment from 'moment'
import ReadingsContext from '../context/readings-context'

const DateSelector = (props) => {
  const { readings } = useContext(ReadingsContext)
  const [readingOne, setReadingOne ] = useState(readings[0])
  const [readingTwo, setReadingTwo ] = useState(readings[1])
  const [bill , setBill] =useState()

  const calculateBill = (readingOne,readingTwo) => {
      const dayCost = readingOne.dayReading - readingTwo.dayReading
      const nightcost = readingOne.nightReading - readingTwo.nightReading
      const r1Date = moment(readingOne.date)
      const r2Date = moment(readingTwo.date)
      const standingCharge=  r1Date.diff(r2Date,'days') * 22.63
      return (((dayCost * 15.85) + (nightcost * 8.65) + standingCharge)/100)
  }
  return (
    <div className="content-container">
      <h1 className ="title">Energy Tracker</h1>
      <select id='reading-one-selector' onChange={(e) => {
        setReadingOne(readings.filter((reading) => {
          if(reading.id === e.target.value) {
            return reading
          }else {
            return false
          }

        }))
      }}>
        <option>Start Date</option>
        {
          readings.map((reading) => {
          return <option key={reading.id} value={reading.id}>{moment(reading.date).format('DD-MM-YYYY')}</option>
        })
      }
      </select>
      <select id='reading-two-selector' onChange={(e) => {
        setReadingTwo(readings.filter((reading) => {
          if(reading.id === e.target.value) {
            return reading
          }else{
            return false
          }
        }))
      }}>
        <option>End Date</option>
        {
          readings.map((reading) => {
          return <option key={reading.id} value={reading.id}>{moment(reading.date).format('DD-MM-YYYY')}</option>
        })
      }
      </select>

      <button onClick={() => {setBill( () => {
        if (readingOne && readingTwo) {
          return calculateBill(readingOne[0],readingTwo[0])
        }
      })}}>
      Calculate
      </button>
      {bill && <h2 className="bill">Bill:£{bill.toFixed(2)}</h2>}
    </div>

  )
}

export default DateSelector