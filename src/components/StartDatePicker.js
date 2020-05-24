import React from 'react'
import { connect } from 'react-redux'
import { setReadingOne } from '../actions/bills'

import ReadingsOptions from './ReadingsOptions'

class DatePicker extends React.Component {
  onChange = (e) => {
    const readingIndex = this.props.readings.findIndex((reading) => reading.id === e.target.value)
    this.props.setReadingOne(this.props.readings[readingIndex])
  }

  render() {
    return (
      <select 
        className="selector" 
        id='reading-one-selector'
        onChange={this.onChange}
      >
        <option>Start Date</option>
        <ReadingsOptions />
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  readings:state.readings
})

const mapDispatchToProps = (dispatch) => ({
  setReadingOne: (reading) => dispatch(setReadingOne(reading))
}) 

export default connect(mapStateToProps,mapDispatchToProps)(DatePicker)