export default (state={},action)=>{
  switch (action.type) {
    case 'SAVE_CURRENCY':
      return { currency: action.data};
    default:
      return state;
  }
}