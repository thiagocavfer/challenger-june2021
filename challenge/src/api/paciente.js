/* 
 * Endpoints para Paciente
 */

import Api from './api.js';

export const getPacientes = async () => {
  try {
    const resp = await Api.get('/pacientes');
    return resp.data;
  } catch (error) {
    throw error;
  } 
}

export const showPaciente = async (id) => {
  try {
    const resp = await Api.get(`/paciente/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  } 
}
