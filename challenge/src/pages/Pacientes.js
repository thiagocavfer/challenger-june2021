import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../components/display/Datatable';
import {VisibilityRounded} from '@material-ui/icons';
import { format } from "../utils/format/date";
import { NavLink } from 'react-router-dom';


const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 350
  },
  {
    field: 'data_nascimento',
    headerName: 'Dt. Nascimento',
    width: 200,
    valueFormatter: params => format(params.value, 'L'), 
  },
  {
    field: 'telefone',
    headerName: 'Telefone',
    align: 'center',
    width: 150,
  },
  {
    field: 'tem_comorbidades',
    headerName: 'Tem Comorbidades?',
    width: 300,
    valueFormatter: params => params.value ? 'SIM' : 'NÃO',
  },
  {
    field: 'vacinado_covid19',
    headerName: 'Já foi vacinado contra a covida 19? ',
    width: 350,
    valueFormatter: params => params.value ? 'SIM' : 'NÃO',
  },
  {
    field: 'action',
    flex: 1,
    headerName: 'Visualizar',
    align: 'center',
    renderCell: params => <NavLink to={`/paciente/${params.row.id}`}><Button variant="contained" color="primary" size="small" startIcon={<VisibilityRounded />} >Ver</Button></NavLink>,
  },
];

const Pacientes = ({listarPacientes}) => {
    const pacientes = useSelector(state => state.pacientes);
    const dispatch = useDispatch();


    return (
      <Container maxWidth="xl" style={{padding: 32 }}>
          <Typography variant="h4" component="h1" style={{padding: '16px 0' }}>
            Lista de Pacientes
          </Typography>
          <DataTable 
            rows={pacientes}
            columns={columns}
            autoHeight
            hideFooterPagination
          />
      </Container>
    )
}

export default Pacientes;