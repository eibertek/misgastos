export const SETNEWREGISTRY = '[SAVE][REGISTRIES] Set new registry to the store';
export const ENABLEEDITMODE = '[RUN][REGISTRIES] Change to edit mode for this tab';
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

// Accion para habilitar edicion

// Accion para editar

// Accion para borrar

// Accion para traer registros
export const getRegistries = () => ({
  type: GETREGISTRIES
});


export default {
  setNewRegistry,
}