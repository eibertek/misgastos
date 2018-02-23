export default (state={},action)=>{
  switch (action.type) {
    case 'SET_FIRST_TIME_COUNTRY_CURRENCY':
      return Object.assign(state, {}, { country: action.country, currency: action.currency, dolar: action.dolar });
    case 'SAVE_DATA':
      return Object.assign(state, {}, { dataPassed: action.data });
    default:
      return state;
  }
}