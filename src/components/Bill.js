import React, { useContext, useState } from 'react'
import moment from 'moment'
import ReadingsContext from '../context/readings-context'
import BillsContext from '../context/bills-context'
import StartDatePicker from './StartDatePicker'
import EndDatePicker from './EndDatePicker'

const Bill = (props) => {
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
    <BillsContext.Provider value= { {readingOne, readingTwo, setReadingOne, setReadingTwo} } >    
      <div className="content-container">
        <h1 className ="title">Energy Tracker</h1>
        <StartDatePicker />
        <EndDatePicker />
        <button className="button" onClick={() => {setBill( () => {
          if (readingOne && readingTwo) {
            return calculateBill(readingOne,readingTwo)
          }
        })}}>
        Calculate
        </button>
        {bill && <h2 className="bill">Bill:£{bill.toFixed(2)}</h2>}
      </div>
    </BillsContext.Provider>
  )
}

export default Bill