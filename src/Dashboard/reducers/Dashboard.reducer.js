import { TOGGLEDITMODE } from '../../registries/actions';

export default (state={},action)=>{
  switch (action.type) {
    case TOGGLEDITMODE:
      const { editMode } = state;
      return { ...state, editMode: {
        registries: action.tableId==='registries' ? !editMode.registries : editMode.registries,
        accounts: action.tableId==='accounts' ? !editMode.accounts : editMode.accounts,
      }};
    default:
      return state;
  }
}