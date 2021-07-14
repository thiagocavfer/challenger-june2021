import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { format } from "../utils/format/date"; //Função para formatação de datas utilizando a biblioteca moment.js
import {ArrowBackIosRounded} from '@material-ui/icons';
import { Button, Card, CardActions, CardContent, CardHeader, Container, Divider, LinearProgress, Typography } from '@material-ui/core';
import { exibirPaciente, limparPaciente } from '../store/paciente/actions';


const PacienteMUI = (props) => {
  const id = props.match.params.id;
  const pacienteSelecionado = useSelector(state => state.pacienteSelecionado);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exibirPaciente(id));
  },[dispatch, id]);

    return (
      <>
        {pacienteSelecionado.loading && <LinearProgress color="primary" />}
        <Container style={{marginTop: 0, paddingTop: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55vh' }}>
          <Card style={{width: '100%', maxWidth: 700}}>
            <CardHeader title={pacienteSelecionado.data.nome} subheader="Paciente" titleTypographyProps={{variant:"h4", component:"h1"}} />
            <CardContent>
              <Divider style={{marginBottom: 24}} />
              <Typography variant="h6" component="p">
                <strong>Data de Nascimento:</strong> {format(pacienteSelecionado.data.data_nascimento,'L')}
              </Typography>
              <Typography variant="h6" component="p">
                <strong>Telefone:</strong> {pacienteSelecionado.data.telefone}
              </Typography>
              <Typography variant="h6" component="p">
                <strong>Tem Comorbidades?</strong> {pacienteSelecionado.data.tem_comorbidades ? 'SIM' : 'NÃO'}
              </Typography>
              <Typography variant="h6" component="p">
                <strong>Já foi vacinado contra a covida 19?</strong> {pacienteSelecionado.data.vacinado_covid19 ? 'SIM' : 'NÃO'}
              </Typography>
              <Divider style={{margin: '24px 0'}} />
            </CardContent>
            <CardActions>
              <NavLink to="/mui/pacientes">
                <Button  size="small" startIcon={<ArrowBackIosRounded />} onClick={() => dispatch(limparPaciente())} >Voltar</Button>
              </NavLink>
            </CardActions>
          </Card>
        </Container>
      </>
    )
}

export default PacienteMUI;
