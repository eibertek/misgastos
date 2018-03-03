export const SETNEWREGISTRY = '[SAVE][REGISTRIES] Set new registry to the store';
export const TOGGLEDITMODE = '[RUN][TABLE][REGISTRIES] Change to edit mode';
export const EDITREGISTRY = '[RUN][REGISTRIES] Change to edit mode for this registry';
export const SAVEREGISTRY = '[SAVE][REGISTRIES] save registry';
export const DELETEREGISTRY = '[DELETE][REGISTRIES] delete registry';
export const GETREGISTRIES = '[RUN][REGISTRIES] get registries to store';

// Accion para registrar nuevo registro
export const setNewRegistry = (registryData) =>
  {
    return {
      type: SETNEWREGISTRY,
      registryData
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
export const editRegistry = (id, registryData) =>
{
  return {
    type: EDITREGISTRY,
    id,
    registryData,
  }
}

// Accion para borrar

// Accion para traer registros
export const getRegistries = () => ({
  type: GETREGISTRIES
});


export default {
  setNewRegistry,
}