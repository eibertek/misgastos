import { List } from 'immutable';
import {DELETEREGISTRY, EDITREGISTRY, SAVEREGISTRY} from "../actions/index";

export default (state = new List([]), action) => {
  switch (action.type) {
    case SAVEREGISTRY:
      return state.push(action.registryData);
    case EDITREGISTRY:
      const editIndex = state.findIndex(item => item.get('id') === action.id);
      const list = editIndex > -1 ? state.update(editIndex, () => {
        return action.registryData;
      }) : state;
      return list;
    case DELETEREGISTRY:
      const deleteIndex = state.findIndex(item => item.get('id') === action.id);
      return state.delete(deleteIndex);
    default:
      return state;
  }
}

