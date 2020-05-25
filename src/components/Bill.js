import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import StartDatePicker from './StartDatePicker'
import EndDatePicker from './EndDatePicker'

export class Bill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bill:undefined
    }
  }
  calculateBill = ( readingOne, readingTwo, settings ) => {
    const { dayRate, nightRate, standingCharge } = settings
    const dayCost = readingOne.dayReading - readingTwo.dayReading
    const nightcost = readingOne.nightReading - readingTwo.nightReading
    const r1Date = moment(readingOne.date)
    const r2Date = moment(readingTwo.date)
    const standingChargeCost =  r1Date.diff(r2Date,'days') * standingCharge
    const bill = (((dayCost * dayRate) + (nightcost * nightRate) + standingChargeCost)/100)
    if (bill < 0 ) {
      this.setState(() => ({ bill:Math.abs(bill) }) )
    } else {
      this.setState(() => ({ bill }) )
    }
  }
  clicker = () => {
    if (this.props.bills[0] && this.props.bills[1]) {
      this.calculateBill(this.props.bills[0],this.props.bills[1],this.props.settings)
    }
  }
  render() {
    return (
        <div className="content-container">
        <StartDatePicker />
        <EndDatePicker />
        <button className="button" onClick={this.clicker}>Calculate Bill!</button>
        { this.state.bill && <h3>Bill: £{this.state.bill.toFixed(2)}</h3>}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    readings:state.readings,
    settings:state.settings,
    bills:state.bills
  }
}

export default connect(mapStateToProps)(Bill)