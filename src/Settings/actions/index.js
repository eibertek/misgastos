export const SAVE_COUNTRY = '[SAVE][Country] Save country data from settings';
export const setCountry = ({ country, currency, dolar}) => ({
  type:SAVE_COUNTRY,
  country
})

export default {
  setCountry,
}