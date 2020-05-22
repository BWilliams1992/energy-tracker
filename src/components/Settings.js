import React, { useContext, useState } from 'react'
import ReadingsContext from '../context/readings-context'

const Settings = () => {
  const { settings, settingsDispatch } =useContext(ReadingsContext)
  const [ dayRate, setDayRate ] = useState()
  const [ nightRate, setNightRate ] = useState()
  const [ standingCharge, setStandingCharge ] = useState()
  const [ visible, setVisible ] = useState(false)
  const [ error, setError ] =useState('')

  const onDayRateChange = (e) => {
    const dayRate = (e.target.value)
    if (!dayRate || dayRate.match(/^\d*\.{0,1}\d{0,2}$/)) {
      setDayRate(dayRate) 
    }
  }
  const onNightRateChange = (e) => {
    const nightRate = (e.target.value)
    if (!nightRate || nightRate.match(/^\d*\.{0,1}\d{0,2}$/)) {
      setNightRate(nightRate) 
    }
  }
  const onStandingChargeChange = (e) => {
    const standingCharge = (e.target.value)
    if (!standingCharge || standingCharge.match(/^\d*\.{0,1}\d{0,2}$/)) {
      setStandingCharge(standingCharge) 
    }
  }

  const toggleSettingsForm = () => {
    const state = visible
    setVisible(!state)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if ( !dayRate || !nightRate || !standingCharge ) {
      setError('Please enter a value for all settings')
    } else {
      setError('')
      settingsDispatch({
        type: 'SET_SETTINGS',
        dayRate:parseFloat(dayRate),
        nightRate: parseFloat(nightRate),
        standingCharge: parseFloat(standingCharge)
      })
    }
  }
  if( visible ) {
    return (
      <div className="content-container">
        <h3 className="settings__title" onClick={toggleSettingsForm}>Settings:</h3>
        <form id="settings-form" onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <label htmlFor="day-rate">Day rate:</label>
          <input type="text" name="day-rate" value={dayRate} onChange={onDayRateChange} />
          <label htmlFor="night-rate">Night rate:</label>
          <input type="text" name="night-rate" value={nightRate} onChange={onNightRateChange} />
          <label htmlFor="standing-charge">Standing charge:</label>
          <input type="text" name="standing-charge" value={standingCharge} onChange={onStandingChargeChange} />
          <button>Save Settings</button> 
        </form>
      </div>
    )
  }else {
    return (
      <div className="content-container">
        <h3 className="settings__title" onClick={toggleSettingsForm}>Settings:</h3>
    </div>
    )
  }
}

export default Settings