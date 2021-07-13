import { Button, Container, Divider, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { format } from "../utils/format/date";
import React from 'react';
import { NavLink } from 'react-router-dom';
import {ArrowBackIosRounded} from '@material-ui/icons';

const Paciente = () => {
  const pacienteSelecionado = useSelector(state => state.pacienteSelecionado);

    return (
      <Container style={{marginTop: 0, paddingTop: 0 }}>
        <Typography variant="h4" component="h1" style={{padding: '32px 16px', backgroundColor: '#efefef' }}>
          Paciente
        </Typography>
        <Divider style={{marginBottom: 24}} />
        <Typography variant="h6" component="p">
          <strong>Nome:</strong> {pacienteSelecionado.nome}
        </Typography>
        <Typography variant="h6" component="p">
          <strong>Data de Nascimento:</strong> {format(pacienteSelecionado.data_nascimento,'L')}
        </Typography>
        <Typography variant="h6" component="p">
          <strong>Telefone:</strong> {pacienteSelecionado.telefone}
        </Typography>
        <Typography variant="h6" component="p">
          <strong>Tem Comorbidades?</strong> {pacienteSelecionado.tem_comorbidades ? 'SIM' : 'NÃO'}
        </Typography>
        <Typography variant="h6" component="p">
          <strong>Já foi vacinado contra a covida 19?</strong> {pacienteSelecionado.vacinado_covid19 ? 'SIM' : 'NÃO'}
        </Typography>
        <Divider style={{margin: '24px 0'}} />
        <NavLink to="/pacientes">
          <Button  size="small" startIcon={<ArrowBackIosRounded />} >Voltar</Button>
        </NavLink>
      </Container>
    )
}

export default Paciente;