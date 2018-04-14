import { fromJS } from 'immutable';
import { mockRegistries, mockAccounts, mockUSCurrency } from '../Dashboard/mocker';
const mockedData = fromJS([]); //fromJS(mockRegistries(5, 20));
const mockedAccounts = fromJS([]);
let store = {};
try {
  store = JSON.parse(decodeURIComponent(atob(sessionStorage.getItem('store'))));
}catch(e) {
  console.log('error retreiving the store', e);
}

export default {
  userSetup: store.userSetup || {},
  registries: fromJS(store.registries) || mockedData,
  accounts: fromJS(store.accounts) || mockedAccounts,
  currencies: fromJS(store.currencies) || fromJS([mockUSCurrency()]),
  dashboard: {
    editMode: {
      registries: false,
      accounts: false,
      currenciesSettings: false,
    }
  },
};