import { TOGGLEDITMODE } from 'src/registries/actions';

export default (state={},action)=>{
  switch (action.type) {
    case TOGGLEDITMODE:
      const { editMode } = state;
      console.log(action.tableId, action.tableId === 'currenciesSettings');
      return { ...state, editMode: {
        registries: action.tableId === 'registries' ? !editMode.registries : editMode.registries,
        accounts: action.tableId === 'accounts' ? !editMode.accounts : editMode.accounts,
        currenciesSettings: action.tableId === 'currenciesSettings' ? !editMode.currenciesSettings : editMode.currenciesSettings,
      }};
    default:
      return state;
  }
}