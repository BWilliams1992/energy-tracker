const settingsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'POPULATE_SETTINGS':
      return action.settings 
    case 'SET_SETTINGS':
      return {
        ...action.settings
      }
    default:
      return state
  }
}

export default settingsReducer