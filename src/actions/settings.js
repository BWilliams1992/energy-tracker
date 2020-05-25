export const setSettings = ( {gas="false", dayRate=0, nightRate=0,standingCharge=0} = { } ) => ({
  type:'SET_SETTINGS',
  settings: {
    gas,
    dayRate,
    nightRate,
    standingCharge
  }
})