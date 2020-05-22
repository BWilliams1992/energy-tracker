const settingsReducer = (state, action) => {
  switch(action.type) {
    case 'POPULATE_SETTINGS':
      return action.settings 
    case 'SET_SETTINGS':
      return {
        dayRate: action.dayRate,
        nightRate: action.nightRate,
        standingCharge: action.standingCharge
      }
    default:
      return state
  }
}

export default settingsReducer