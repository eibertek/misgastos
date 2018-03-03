import { createSelector } from 'reselect';

const firstTimeData = state => state.userSetup;
const dashboard = state => state.dashboard;
const getRegistries = state => state.registries;
const getAccounts = state => state.accounts;

const countrySelector = createSelector(
  firstTimeData,
  ({country}) => country
)

const currencySelector = createSelector(
  firstTimeData,
  ({currency}) => currency
)

const dolarSelector = createSelector(
  firstTimeData,
  ({dolar}) => dolar
)

const getEditMode = createSelector(
  dashboard,
  ({ editMode }) => {
    return editMode;
  }
)


export default {
  countrySelector,
  currencySelector,
  dolarSelector,
  getRegistries,
  getAccounts,
  getEditMode
}