import {
  REGISTRY_SAVE
} from '../actions/constants';

export default (state={},action)=>{
  switch (action.type) {
    case REGISTRY_SAVE:
      return Object.assign(state, {},
        { registry: action.payload });
    default:
      return state;
  }
}