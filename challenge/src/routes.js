import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PacienteMUI from './pages/PacienteMUI';
import Pacientes from './pages/Pacientes';
import Paciente from './pages/Paciente';
import PacientesMUI from './pages/PacientesMUI';

const Routes = () => {
  
  return(
    <React.StrictMode>
      <BrowserRouter>
          <Switch>  
            <Route path="/" exact={true} component={Pacientes} />
            <Route path="/paciente/:id" exact={true} component={Paciente} />
            <Route path="/mui" exact={true} component={PacientesMUI} />
            <Route path="/mui/paciente/:id" exact={true} component={PacienteMUI} />
            <Route component={Pacientes} />
          </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
};

export default Routes;