const readingsReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_READINGS':
      return action.readings
    case 'ADD_READING': 
      return [
        ...state,
        {
          id:action.id,
          date:action.date,
          dayReading:action.dayReading,
          nightReading:action.nightReading
        }
      ]
    case 'REMOVE_READING' :
        return state.filter((reading) => reading.date !== action.date)
    default:
      return state
  }
}

export default readingsReducer