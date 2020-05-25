import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export default class ReadingForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: props.reading ? moment(props.reading.date).format('DD-MM-YYYY') : '',
      dayReading: props.reading ? props.reading.dayReading : 0,
      nightReading: props.reading ? props.reading.nightReading : 0,
      error: ''
    }
  }
  onDayReadingChange = (e) => {
    const dayReading = (e.target.value)
    if (!dayReading || dayReading.match(/^[0-9]*$/)) {
      this.setState(() => ({ dayReading })) 
    }
  }
  onNightReadingChange = (e) => {
    const nightReading = (e.target.value)
    if (!nightReading || nightReading.match(/^[0-9]*$/)) {
      this.setState(() => ({ nightReading }))
    }
  }

  onDateChange = (e) => {
    const date = (e.target.value)
    if (!date || date.match(/^\d{0,2}-{0,1}\d{0,2}-{0,1}\d{0,4}$/)) {
      this.setState(() => ({ date })) 
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    if ( !this.state.date || !this.state.dayReading || !this.state.nightReading ) {
      this.setState(() => ({error: 'Please enter a date, day reading and night reading'}))
    } else {
      this.setState(() => ({error:''}))
      this.props.onSubmit({
        id: uuidv4(),
        date:moment(this.state.date,'DD-MM-YYYY').valueOf(),
        dayReading:parseFloat(this.state.dayReading),
        nightReading:parseFloat(this.state.nightReading)
      })
    }
    
  }
  render() {
    return (
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p>Error:{this.state.error}</p>}
            <label className="form-label" htmlFor="date">Date</label>
            <input 
              className="form-input"
              type="text" 
              name="date"
              value={this.state.date} 
              onChange={this.onDateChange}
            />
            <label className="form-label" htmlFor="day-reading">Day reading</label>
            <input 
              className="form-input"
              type="text" 
              name="day-reading" 
              value={this.state.dayReading} 
              onChange={this.onDayReadingChange} 
            />
            <label className="form-label" htmlFor="night-reading">Night reading</label>
            <input 
              className="form-input"
              type="text" 
              name="night-reading" 
              value={this.state.nightReading} 
              onChange={this.onNightReadingChange} 
            />
            <button className="button">Submit</button>
          </form>
    )
  }
  
}
