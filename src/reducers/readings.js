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
    case 'EDIT_READING' :
      return state.map((reading) => {
        if (reading.id === action.id){
          return {
            ...reading,
            ...action.updates
          }
        } else {
          return reading
        }
      })
    case 'REMOVE_READING' :
        return state.filter((reading) => reading.id !== action.id)
    default:
      return state
  }
}

export default readingsReducer