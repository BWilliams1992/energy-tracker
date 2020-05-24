import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

export const ReadingsOptions = (props) => {
  const sortedReadings = props.readings.sort((a ,b) => {
    if ( a.date > b.date ) {
      return -1
    } if (a.date < b.date ) {
      return 1
    } else {
      return 0
    }
  })

  return (
    sortedReadings.map((reading) => {
      return <option key={reading.id} value={reading.id}>{moment(reading.date).format('DD-MM-YYYY')}</option>
    })
  )
}

const mapStateToProps = (state) => ({
  readings: state.readings
}) 

export default connect(mapStateToProps)(ReadingsOptions)