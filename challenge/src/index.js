import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { ptBR } from '@material-ui/data-grid';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

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
