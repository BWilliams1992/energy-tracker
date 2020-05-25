import React from 'react'

export default class SettingsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      gas: props.settings ? props.settings.gas : "false",
      dayRate: props.settings ? props.settings.dayRate : 0,
      nightRate:props.settings ? props.settings.nightRate : 0,
      standingCharge:props.settings ? props.settings.standingCharge : 0,
      error: ''
    }
  }

  onDayRateChange = (e) => {
    const dayRate = (e.target.value)
    if (!dayRate || dayRate.match(/^\d*\.{0,1}\d{0,2}$/)) {
      this.setState(() => ({dayRate}))
    }
  }
  
  onNightRateChange = (e) => {
  const nightRate = (e.target.value)
  if (!nightRate || nightRate.match(/^\d*\.{0,1}\d{0,2}$/)) {
    this.setState(() => ({ nightRate })) 
  }
}
  onStandingChargeChange = (e) => {
  const standingCharge = (e.target.value)
  if (!standingCharge || standingCharge.match(/^\d*\.{0,1}\d{0,2}$/)) {
    this.setState(() => ({ standingCharge })) 
  }
}
  onGasChange = (e) => {
    const gas = e.target.value
    this.setState(() => ({ gas }))
  }

  onSubmit = (e) => {
  e.preventDefault()
  if ( !this.state.dayRate || !this.state.nightRate || !this.state.standingCharge ) {
    this.setState(() => ({ error: 'Please enter a value for all settings' }))
  } else {
    this.setState(() => ({ error: '' }))
    this.props.onSubmit({
      gas:this.state.gas,
      dayRate:parseFloat(this.state.dayRate),
      nightRate: parseFloat(this.state.nightRate),
      standingCharge: parseFloat(this.state.standingCharge)
    })
  }
}
  render() {
    return (
    <div className="content-container">
      <h3 className="settings__title">Settings:</h3>
      <form id="settings-form" onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <p>
          <label htmlFor="electric">Electricity</label>
          <input type="radio" id="electric" value="false" name="gas" onChange={this.onGasChange} checked={this.state.gas === "false"} />
          <label htmlFor="gas-and-electric">Gas & Electricity</label>
          <input type="radio" id="gas-and-electric" value="true" name="gas" onChange={this.onGasChange} checked={this.state.gas === "true"} />
        </p>
        <label htmlFor="day-rate">Day rate:</label>
        <input type="text" id="day-rate" value={this.state.dayRate} onChange={this.onDayRateChange} />
        <label htmlFor="night-rate">Night rate:</label>
        <input type="text" id="night-rate" value={this.state.nightRate} onChange={this.onNightRateChange} />
        <label htmlFor="standing-charge">Standing charge:</label>
        <input type="text" id="standing-charge" value={this.state.standingCharge} onChange={this.onStandingChargeChange} />
        <button>Save Settings</button> 
      </form>
    </div>
    )
  }
}
