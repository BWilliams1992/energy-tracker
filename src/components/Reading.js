import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { removeReading } from '../actions/readings'

export const Reading = ({ id, date, dayReading, nightReading, removeReading}) => {
  const onClick = () => {
    removeReading(id)
  }
  return (
    <div className="reading">
      <Link className="reading__link" to={`/edit/${id}`}>
        <h3>Date: {moment(date).format('DD-MM-YYYY')}</h3>
        <p>Day reading: {dayReading}</p>
        <p>Night reading: {nightReading}</p>
      </Link>
      <button className="reading__button" onClick={onClick}>Remove</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>({
  removeReading: (id) => dispatch(removeReading(id))
})

export default connect(undefined,mapDispatchToProps)(Reading)