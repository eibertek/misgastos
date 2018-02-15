export default (state={},action)=>{
  switch (action.type) {
    case 'SAVE_DEFAULT_COUNTRY':
      return { defaultCountry: action.data};
    default:
      return state;
  }
}