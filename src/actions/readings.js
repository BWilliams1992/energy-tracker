
// //POPULATE_READINGS
export const populateReadings =  ( readings = [] ) => ({
  type: 'POPULATE_READINGS',
  readings
})
//ADD_READING
export const addReading = ( {id='',date='', dayReading= 0, nightReading =0 } = { } ) => ({
  type: 'ADD_READING',
  reading: {
    id,
    date,
    dayReading,
    nightReading
  }
})
// //REMOVE_READING
// const removeReading = ( { id } = { } ) => ({
//   type: 'REMOVE_READING',
//   id
// })