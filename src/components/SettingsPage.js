import React from 'react'
import { connect } from 'react-redux'
import SettingsForm from './SettingsForm'
import { setSettings } from '../actions/settings'

export class SettingsPage extends React.Component {
  onSubmit = (settings) => {
    console.log(this.props)
    this.props.setSettings(settings)
  }

  render() {
    return (
      <div> 
        Settings Page
        <SettingsForm settings={this.props.settings} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    settings:state.settings
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSettings: (settings) =>  dispatch(setSettings(settings))
})

export default connect(mapStatetoProps,mapDispatchToProps)(SettingsPage)