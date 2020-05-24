import React from 'react'
import { connect } from 'react-redux'
import { setReadingTwo } from '../actions/bills'
import ReadingsOptions from './ReadingsOptions'

class EndDatePicker extends React.Component {
  onChange = (e) => {
    const readingIndex = this.props.readings.findIndex((reading) => reading.id === e.target.value)
    this.props.setReadingTwo(this.props.readings[readingIndex])
  }

  render() {
    return (
      <select 
        className="selector" 
        id='reading-one-selector'
        onChange={this.onChange}
      >
        <option>End date</option>
        <ReadingsOptions />
      </select>
    )
  }
}

const mapStateToProps = (state) => ({
  readings:state.readings
})

const mapDispatchToProps = (dispatch) => ({
  setReadingTwo: (reading) => dispatch(setReadingTwo(reading))
}) 

export default connect(mapStateToProps,mapDispatchToProps)(EndDatePicker)