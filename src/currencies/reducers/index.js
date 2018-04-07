import { List, fromJS } from 'immutable';
import Moment from 'moment';
import {DELETECURRENCY, EDITCURRENCY, SAVECURRENCY} from '../actions/index';

export default (state = new List([]), action) => {
  const payload  = action.currencyData;
  switch (action.type) {
    case SAVECURRENCY:
      return state.push(payload);
    case EDITCURRENCY:
      const editIndex = state.findIndex(item => item.get('id') === action.id);
      const list = editIndex > -1 ? state.update(editIndex, () => {
        return payload;
      }) : state;
      return list;
    case DELETECURRENCY:
      const deleteIndex = state.findIndex(item => item.get('id') === action.id);
      return state.delete(deleteIndex);
    case 'SET_FIRST_TIME_COUNTRY':
      return state.push( fromJS({ ...action.currency, dolar: action.dolar, default: true, dateUpdated: Moment().format('DD/MM/YYYY hh:mm:ss') }) );
    default:
      return state;
  }
}

