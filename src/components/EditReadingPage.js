import React from 'react'
import { connect } from 'react-redux'
import ReadingForm from './ReadingForm'
import { editReading } from '../actions/readings'


export class EditReadingPage extends React.Component {
  onSubmit = (reading) => {
    this.props.editReading(this.props.reading.id, reading)
  }
  render() {
    return (
      <div className="content-container">
        <div className="form-container">
          <h2>Edit Reading:</h2>
          <ReadingForm onSubmit={this.onSubmit} reading={this.props.reading} />
        </div>
      </div>
     
    )
  }
}

const mapStateToProps = (state,props) => ({
  reading : state.readings.find((reading) => reading.id === props.match.params.id )
}) 

const mapDispatchToProps = (dispatch) => ({
  editReading: (id, reading) => dispatch(editReading(id,reading))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditReadingPage)