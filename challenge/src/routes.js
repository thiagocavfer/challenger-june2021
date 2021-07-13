import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Paciente from './pages/Paciente';
import Pacientes from './pages/Pacientes';

const Routes = () => {
  
  return(
    <React.StrictMode>
      <BrowserRouter>
          <Switch>  
            <Route path="/" exact={true} component={Pacientes} />
            <Route path="/paciente/:id" exact={true} component={Paciente} />
            <Route component={Pacientes} />
          </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
};

export default Routes;