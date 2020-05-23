import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export default class ReadingForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      dayReading: 0,
      nightReading: 0
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
    this.props.onSubmit({
      id: uuidv4(),
      date:moment(this.state.date,'DD-MM-YYYY').valueOf(),
      dayReading:parseFloat(this.state.dayReading),
      nightReading:parseFloat(this.state.nightReading)
    })
  }
  render() {
    return (
      <div className="content-container content-container--centered">
        <div>
          <h2>Add new reading</h2>
          <form className="form" onSubmit={this.onSubmit}>
            <label htmlFor="date">Date</label>
            <input 
              type="text" 
              name="date"
              value={this.state.date} 
              onChange={this.onDateChange}
            />
            <label htmlFor="day-reading">Day reading</label>
            <input 
              type="text" 
              name="day-reading" 
              value={this.state.dayReading} 
              onChange={this.onDayReadingChange} 
            />
            <label htmlFor="night-reading">Night reading</label>
            <input 
              type="text" 
              name="night-reading" 
              value={this.state.nightReading} 
              onChange={this.onNightReadingChange} 
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
  
}
