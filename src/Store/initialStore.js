import { fromJS } from 'immutable';
import { mockRegistries, mockAccounts } from '../Dashboard/mocker';
const mockedData = fromJS(mockRegistries(5, 20));
const mockedAccounts = fromJS(mockAccounts(5));
export default {
  userSetup: {},
  registries: mockedData,
  accounts: mockedAccounts,
  currencies: fromJS([]),
  dashboard: {
    editMode: {
      registries: false,
      accounts: false,
      currencies: false,
    }
  },
};