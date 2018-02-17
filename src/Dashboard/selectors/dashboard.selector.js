import { createSelector } from 'reselect';

const firstTimeData = state => state.userSetup;

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

export default {
  countrySelector,
  currencySelector,
  dolarSelector
}