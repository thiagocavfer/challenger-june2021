import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { format } from "../utils/format/date";
import { listarPacientes } from '../store/pacientes/actions';
import { BootstrapButton } from '../components/buttons';

const Pacientes = () => {
  const pacientes = useSelector(state => state.pacientes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarPacientes());
  }, [dispatch]);

  return (
    <Container fluid style={{ width: '100%', padding: 32 }}>
      <Row>
        <Col>
          <h1>Pacientes</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover size="sm" responsive>
            <thead>
              <tr>
                <th className="text-center" >#</th>
                <th className="text-center" >Nome</th>
                <th className="text-center" >Dt. Nascimento</th>
                <th className="text-center" >Telefone</th>
                <th className="text-center" >Tem Comorbidades?</th>
                <th className="text-center" >Já foi vacinado contra a covida 19?</th>
                <th className="text-center" >Visualizar</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.data.map((paciente, index) => {
                return (
                  <tr key={index}>
                    <td>{paciente.id}</td>
                    <td>{paciente.nome}</td>
                    <td className="text-center" >{format(paciente.data_nascimento,'L')}</td>
                    <td className="text-center">{paciente.telefone}</td>
                    <td className="text-center">{paciente.tem_comorbidades ? 'SIM' : 'NÃO'}</td>
                    <td className="text-center">{paciente.vacinado_covid19 ? 'SIM' : 'NÃO'}</td>
                    <td className="text-center">
                      <NavLink to={`/paciente/${paciente.id}`}>
                        <BootstrapButton variant="primary">Ver</BootstrapButton>
                      </NavLink>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default Pacientes;
