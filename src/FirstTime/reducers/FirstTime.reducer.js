export default (state={},action)=>{
  switch (action.type) {
    case 'SET_FIRST_TIME_COUNTRY_CURRENCY':
      console.log(action);
      return { country: action.country, currency: action.currency };
    default:
      return state;
  }
}