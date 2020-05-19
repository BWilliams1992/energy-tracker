import React, { useState, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'
import ReadingsContext from '../context/readings-context'


const ReadingForm = () => {
  const { dispatch } = useContext(ReadingsContext)
  const [ date, setDate] = useState('')
  const [ dayReading, setDayReading ] = useState('')
  const [ nightReading, setNightReading] =useState('')

  const onDayReadingChange = (e) => {
    const dayReading = (e.target.value)
    if (!dayReading || dayReading.match(/^[0-9]*$/)) {
      setDayReading(dayReading) 
    }
  }
  const onNightReadingChange = (e) => {
    const nightReading = (e.target.value)
    if (!nightReading || nightReading.match(/^[0-9]*$/)) {
      setNightReading(nightReading) 
    }
  }

  const onDateChange = (e) => {
    const date = (e.target.value)
    if (!date || date.match(/^\d{0,2}-{0,1}\d{0,2}-{0,1}\d{0,4}$/)) {
      setDate(date) 
    }
  }
  const addReading = (e) => {
    e.preventDefault()
    dispatch({
        type: 'ADD_READING',
        id:uuidv4(),
        date:moment(date,'DD-MM-YYYY').valueOf(),
        dayReading,
        nightReading
      })

      setDayReading('')
      setNightReading('')
  }
  return (
    <form onSubmit={addReading}>
      <label htmlFor="date">Date</label>
      <input 
        type="text" 
        name="date"
        value={date} 
        onChange={onDateChange}
      />
      <label htmlFor="day-reading">Day reading</label>
      <input type="text" name="day-reading" value={dayReading} onChange={onDayReadingChange} />
      <label htmlFor="night-reading">Night reading</label>
      <input type="text" name="night-reading" value={nightReading} onChange={onNightReadingChange} />
      <button>Submit</button>
    </form>
  )
}

export default ReadingForm