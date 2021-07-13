import axios from 'axios';

export const listaPacientes = (lista) => ({
  type: "@pacientes/LISTA",
  payload: lista
})