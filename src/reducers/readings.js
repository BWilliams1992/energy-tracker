const readingsReducerDefaultState = []

const readingsReducer = (state = readingsReducerDefaultState, action) => {
  switch (action.type) {
    case 'POPULATE_READINGS':
      return action.readings
    case 'ADD_READING': 
      return [
        ...state,
        action.reading
      ]
    case 'REMOVE_READING' :
        return state.filter((reading) => reading.date !== action.date)
    default:
      return state
  }
}

export default readingsReducer