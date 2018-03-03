import { List } from 'immutable';
import {EDITREGISTRY, SAVEREGISTRY} from "../actions/index";

export default (state = new List([]), action) => {
  switch (action.type) {
    case SAVEREGISTRY:
      return state.push(action.registryData);
    case EDITREGISTRY:
      const list = state.update(state.findIndex(item => item.id === action.id), item => action.registryData);
      console.log(state.toJS(), list.toJS());
      return list;
    default:
      return state;
  }
}

