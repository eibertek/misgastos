import { createSelector } from 'reselect';

const firstTimeData = state => state.userSetup;
const dashboard = state => state.dashboard;
const getRegistries = state => state.registries;
const getAccounts = state => state.accounts;
const getCurrencies = state => state.currencies;

const countrySelector = createSelector(
  firstTimeData,
  ({ country }) => country );

const defaultCurrencySelector = createSelector(
  getCurrencies,
  (currencies) => {
    return currencies.find(currency => currency.get('default'));
  },
);

const getEditMode = createSelector(
  dashboard,
  ({ editMode }) => {
    return editMode;
  }
);


export default {
  firstTimeData,
  countrySelector,
  defaultCurrencySelector,
  getRegistries,
  getAccounts,
  getCurrencies,
  getEditMode,
};