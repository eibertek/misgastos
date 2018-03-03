import { fromJS } from 'immutable';
import { mockRegistries } from '../Dashboard/mocker';
const mockedData = fromJS(mockRegistries(5, 20));
export default {
  userSetup: {},
  registries: mockedData,
  dashboard: {
    editMode: {
      registries: false,
      accounts: false,
    }
  },
};