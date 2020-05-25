import React from 'react'
import { connect } from 'react-redux'
import ReadingsForm from './ReadingForm'
import { addReading } from '../actions/readings'

export class AddReadingForm extends React.Component {
  onSubmit = (reading) => {
    this.props.addReading(reading)
  }
  render() {
    return (
      <div className="content-container">
        <div className="form-container">
          <h2>Add new reading:</h2>
          <ReadingsForm
            onSubmit={this.onSubmit}
          />
       </div>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  addReading: (reading) => dispatch(addReading(reading))
})

export default connect(undefined, mapDispatchToProps)(AddReadingForm)