export default (state={},action)=>{
  switch (action.type) {
    case 'SAVE_DEFAULT_COUNTRY':
      return { defaultCountry: action.data};
    case 'SET_FIRST_TIME_DATA':
      return { FirstTime: action.data };
    default:
      return state;
  }
}