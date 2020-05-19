import React, { useState, useContext} from 'react'
import ReadingsContext from '../context/readings-context'
import moment from 'moment'


const ReadingForm = () => {
  const { dispatch } = useContext(ReadingsContext)
  const [ date, setDate] = useState('')
  const [ dayReading, setDayReading ] = useState('')
  const [ nightReading, setNightReading] =useState('')

  const hello = "a123"
  if (hello.match(/^[0-9]*$/)) {
    console.log(hello)
  }else {
    console.log('mope')
  }

  const addReading = (e) => {
    e.preventDefault()
    console.log(moment(date,'DD-MM-YYYY').valueOf())
    dispatch({
        type: 'ADD_READING',
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
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="day-reading">Day reading</label>
      <input type="text" name="day-reading" value={dayReading} onChange={(e) => setDayReading(e.target.value)} />
      <label htmlFor="night-reading">Night reading</label>
      <input type="text" name="night-reading" value={nightReading} onChange={(e) => setNightReading(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}

export default ReadingForm