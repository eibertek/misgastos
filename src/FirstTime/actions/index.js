
export const setFirstTimeData = ({ country, currency, dolar}) => ({
  type:'SET_FIRST_TIME_COUNTRY_CURRENCY',
  country, currency, dolar
})

export default {
  setFirstTimeData,
}