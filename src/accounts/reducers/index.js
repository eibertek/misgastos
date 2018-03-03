import { List } from 'immutable';
import {DELETEACCOUNT, EDITACCOUNT, SAVEACCOUNT} from "../actions/index";

export default (state = new List([]), action) => {
  switch (action.type) {
    case SAVEACCOUNT:
      return state.push(action.registryData);
    case EDITACCOUNT:
      const editIndex = state.findIndex(item => item.get('id') === action.id);
      const list = editIndex > -1 ? state.update(editIndex, () => {
        return action.registryData;
      }) : state;
      return list;
    case DELETEACCOUNT:
      const deleteIndex = state.findIndex(item => item.get('id') === action.id);
      return state.delete(deleteIndex);
    default:
      return state;
  }
}

