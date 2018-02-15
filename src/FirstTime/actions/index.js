
export const setFirstTimeData = ({ country, currency}) => ({
  type:'SET_FIRST_TIME_COUNTRY_CURRENCY',
  country, currency,
})

export default {
  setFirstTimeData,
}