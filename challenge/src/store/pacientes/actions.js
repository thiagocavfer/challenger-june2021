import { getPacientes } from '../../api/paciente';

//Middleware para listar pacientes
export const listarPacientes = () => {
  return dispatch => {
    dispatch(listaPacientesStarted());

    getPacientes()
      .then(res => {
        dispatch(listaPacientesSuccess(res));
      })
      .catch(error => {
        dispatch(listaPacientesFailure(error));
      });
  };
};

//Actions lista de pacientes
const listaPacientesSuccess = lista => ({
  type: 'LISTA_PACIENTES_SUCESSO',
  payload: lista
});

const listaPacientesStarted = () => ({
  type: 'LISTA_PACIENTES_INICIADO'
});

const listaPacientesFailure = error => ({
  type: 'LISTA_PACIENTES_FALHA',
  payload: {
    error
  }
});
