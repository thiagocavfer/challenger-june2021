import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { exibirPaciente, limparPaciente } from '../store/paciente/actions';
import { format } from '../utils/format/date';
import { BootstrapButton } from '../components/buttons';
import { FaAngleLeft } from 'react-icons/fa';



const PacienteMUI = (props) => {
  const id = props.match.params.id;
  const pacienteSelecionado = useSelector(state => state.pacienteSelecionado);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exibirPaciente(id));
  },[dispatch, id]);

    return (
      <Container fluid style={{ width: '100%', padding: 32 }}>
        <Row >
          <Col style={{marginTop: 0, paddingTop: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55vh' }}>
            <Card style={{width: '100%', maxWidth: 700}}>
              <Card.Header>
                <h1 className="h4">{pacienteSelecionado.data.nome}</h1>
                <small class="text-muted">Paciente</small>
              </Card.Header>
              <Card.Body>
                <div>
                  <label>Data de Nascimento:</label> <span className="lead">{format(pacienteSelecionado.data.data_nascimento,'L')}</span>
                </div>
                <div>
                  <label>Telefone:</label> <span className="lead">{pacienteSelecionado.data.telefone}</span>
                </div>
                <div>
                  <label>Tem Comorbidades?</label> <span className="lead">{pacienteSelecionado.data.tem_comorbidades ? 'SIM' : 'NÃO'}</span>
                </div>
                <div>
                  <label>Já foi vacinado contra a covida 19?</label> <span className="lead">{pacienteSelecionado.data.vacinado_covid19 ? 'SIM' : 'NÃO'}</span>
                </div>
              </Card.Body>
              <Card.Footer>
                <NavLink to="/pacientes/">
                  <BootstrapButton variant="outline-dark" onClick={() => dispatch(limparPaciente())}><FaAngleLeft /> Voltar</BootstrapButton>
                </NavLink>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

    )
}

export default PacienteMUI;
