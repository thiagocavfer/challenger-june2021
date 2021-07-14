import { showPaciente } from '../../api/paciente';

//Middleware para exibir um paciente selecionado
export const exibirPaciente = (id) => {
  return dispatch => {
    dispatch(exibePacienteStarted());

    showPaciente(id)
      .then(res => {
        dispatch(exibePacienteSuccess(res));
      })
      .catch(error => {
        dispatch(exibePacienteFailure(error));
      });
  };
};

//Actions para um Paciente selecionado
export const limparPaciente = (id) => {
  return dispatch => {
    dispatch(limpaPaciente());
  };
};

const exibePacienteSuccess = lista => ({
  type: 'EXIBE_PACIENTE_SUCESSO',
  payload: lista
});

const exibePacienteStarted = () => ({
  type: 'EXIBE_PACIENTE_INICIADO'
});

const exibePacienteFailure = error => ({
  type: 'EXIBE_PACIENTE_FALHA',
  payload: {
    error
  }
});

const limpaPaciente = () => ({
  type: 'LIMPA_PACIENTE'
});
