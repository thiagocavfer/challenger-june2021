/**
 * Reducer do paciente selecionado
 */

const initialState = {
  loading: true,
  data: {},
  error: null
};


const pacienteSelecionado = (state = initialState, action) => {
  switch (action.type) {
    case 'EXIBE_PACIENTE_INICIADO':
      return {
        ...state,
        loading: true
      };
    case 'EXIBE_PACIENTE_SUCESSO':
      return {
        loading: false,
        error: null,
        data: action.payload
      };
    case 'EXIBE_PACIENTE_FALHA':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case 'LIMPA_PACIENTE':
      return initialState;
    default:
      return state;
  }
}

export default pacienteSelecionado;
