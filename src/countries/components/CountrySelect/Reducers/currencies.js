export default (state={},action)=>{
  switch (action.type) {
    case 'SET_COUNTRY':
      return { storeme: state.storeme + action.data};
    default:
      return state;
  }
}