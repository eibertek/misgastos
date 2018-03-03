export const SETNEWACCOUNT = '[SAVE][ACCOUNTS] Set new ACCOUNT to the store';
export const TOGGLEDITMODE = '[RUN][TABLE][ACCOUNTS] Change to edit mode';
export const EDITACCOUNT = '[RUN][ACCOUNTS] Change to edit mode for this ACCOUNT';
export const SAVEACCOUNT = '[SAVE][ACCOUNTS] save ACCOUNT';
export const DELETEACCOUNT = '[DELETE][ACCOUNTS] delete ACCOUNT';
export const GETACCOUNTS = '[RUN][ACCOUNTS] get ACCOUNTS to store';

// Accion para registrar nuevo registro
export const setNewAccount = (ACCOUNTData) =>
  {
    return {
      type: SETNEWACCOUNT,
      ACCOUNTData
    }
  }

// Accion para habilitar botones de edicion
export const toggleEditButtons = (tableId) => {
  return {
    type: TOGGLEDITMODE,
    tableId
  }
};

// Accion para editar
export const editAccount = (id, ACCOUNTData) =>
{
  return {
    type: EDITACCOUNT,
    id,
    ACCOUNTData,
  }
}

// Accion para borrar
export const deleteAccount = (id) =>
{
  return {
    type: DELETEACCOUNT,
    id,
  }
}
// Accion para traer registros
export const getAccounts = () => ({
  type: GETACCOUNTS
});
