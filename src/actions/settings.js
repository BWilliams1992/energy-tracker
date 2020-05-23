export const setSettings = ( {dayRate=0, nightRate=0,standingCharge=0} = { } ) => ({
  type:'SET_SETTINGS',
  settings: {
    dayRate,
    nightRate,
    standingCharge
  }
})