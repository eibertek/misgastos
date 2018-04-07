export const SETNEWCURRENCY = '[SAVE][CURRENCY] Set new Currency to the store';
export const TOGGLEDITMODE = '[RUN][TABLE][CURRENCY] Change to edit mode';
export const EDITCURRENCY = '[RUN][CURRENCY] Change to edit mode for this registry';
export const SAVECURRENCY = '[SAVE][CURRENCY] save registry';
export const DELETECURRENCY = '[DELETE][CURRENCY] delete registry';
export const GETCURRENCY = '[RUN][CURRENCY] get ACCOUNTS to store';

// Accion para registrar nuevo registro
export const setNewCurrency = (currencyData) =>
  {
    return {
      type: SAVECURRENCY,
      currencyData
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
export const editCurrency = (id, currencyData) =>
{
  return {
    type: EDITCURRENCY,
    id,
    currencyData,
  }
}

// Accion para borrar
export const deleteCurrency = (id) =>
{
  return {
    type: DELETECURRENCY,
    id,
  }
}
// Accion para traer registros
export const getCurrency = () => ({
  type: GETCURRENCY
});
