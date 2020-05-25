const billsReducer = (state = [], action ) => {
  switch(action.type) {
    case 'SET_READING_ONE' :
      return [state[0] = action.reading,state[1]]
    case 'SET_READING_TWO':
      return [state[0],state[1] = action.reading]
    case 'SET_BILL':
    default:
      return state
  }
}

export default billsReducer