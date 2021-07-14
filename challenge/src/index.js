import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { ptBR } from '@material-ui/data-grid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Utilizado o Material-UI como tema
 * Na variável theme abaixo é possível criar o próprio tema 
 * personalizado os atributos do tema
 * 
 * https://material-ui.com/
 */
const theme = createTheme({}, ptBR);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
