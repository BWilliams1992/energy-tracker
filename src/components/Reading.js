import React from 'react'
import moment from 'moment'

const Reading = ({ id, date, dayReading, nightReading}) => {
  return (
    <div className="reading">
      <h3>Date: {moment(date).format('DD-MM-YYYY')}</h3>
      <p>Day reading: {dayReading}</p>
      <p>Night reading: {nightReading}</p>
    </div>
  )
}

export default Reading