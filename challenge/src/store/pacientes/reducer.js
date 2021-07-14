/**
 * Reducer para lista de pacientes
 */

const initialState = {
  loading: true,
  data: [],
  error: null
};

const pacientesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LISTA_PACIENTES_INICIADO':
      return {
        ...state,
        loading: true
      };
    case 'LISTA_PACIENTES_SUCESSO':
      return {
        loading: false,
        error: null,
        data: action.payload
      };
    case 'LISTA_PACIENTES_FALHA':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export default pacientesReducer;
