import React from 'react'

export default class SettingsForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
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

  onSubmit = (e) => {
  e.preventDefault()
  if ( !this.state.dayRate || !this.state.nightRate || !this.state.standingCharge ) {
    this.setState(() => ({ error: 'Please enter a value for all settings' }))
  } else {
    this.setState(() => ({ error: '' }))
    this.props.onSubmit({
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
        <label htmlFor="day-rate">Day rate:</label>
        <input type="text" name="day-rate" value={this.state.dayRate} onChange={this.onDayRateChange} />
        <label htmlFor="night-rate">Night rate:</label>
        <input type="text" name="night-rate" value={this.state.nightRate} onChange={this.onNightRateChange} />
        <label htmlFor="standing-charge">Standing charge:</label>
        <input type="text" name="standing-charge" value={this.state.standingCharge} onChange={this.onStandingChargeChange} />
        <button>Save Settings</button> 
      </form>
    </div>
    )
  }
}
