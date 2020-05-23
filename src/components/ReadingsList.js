import React from 'react'
import { connect } from 'react-redux'
import Reading from './Reading'

export const ReadingsList = (props) => {
 
  // const sortedReadings = readings.sort((a ,b) => {
  //   if ( a.date > b.date ) {
  //     return -1
  //   } if (a.date < b.date ) {
  //     return 1
  //   } else {
  //     return 0
  //   }
  // })

  return (
    <div className="content-container">
      { props.readings.map((reading) => (
          <Reading key={reading.id} {...reading} />
        ))}
    </div>
  )
  
}

const mapStateToProps = (state) => {
  return {
    readings: state.readings
  }
}

export default connect(mapStateToProps)(ReadingsList)