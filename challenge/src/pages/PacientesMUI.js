import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core';
import { VisibilityRounded } from '@material-ui/icons';
import DataTable from '../components/display/Datatable';
import { format } from "../utils/format/date";
import { listarPacientes } from '../store/pacientes/actions';

//As colunas que devem ser exibidas na tabela
const columns = [
  { field: 'id', headerName: '#', width: 100 },
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
    renderCell: params => <NavLink to={`/mui/paciente/${params.row.id}`}><Button variant="contained" color="primary" size="small" startIcon={<VisibilityRounded />} >Ver</Button></NavLink>,
  },
];

const PacientesMUI = () => {
    const pacientes = useSelector(state => state.pacientes);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listarPacientes());
    }, [dispatch]);
  
    return (
      <Container maxWidth="xl" style={{padding: 32 }}>
          <Typography variant="h4" component="h1" style={{padding: '16px 0' }}>
            Lista de Pacientes
          </Typography>
          <DataTable 
            rows={pacientes.data}
            columns={columns}
            autoHeight
            hideFooterPagination
            loading={pacientes.loading}
            error={pacientes.error}
          />
      </Container>
    )
}

export default PacientesMUI;
