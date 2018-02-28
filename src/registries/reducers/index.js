import { List } from 'immutable';
import { SAVEREGISTRY } from "../actions/index";

export default (state = new List([]), action) => {
  switch (action.type) {
    case SAVEREGISTRY:
      return state.push(action.registryData);
    default:
      return state;
  }
}