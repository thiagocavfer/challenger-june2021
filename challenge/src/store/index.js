import { createStore, combineReducers, applyMiddleware } from 'redux';
import pacientesReducer from './pacientes/reducer';
import pacienteSelecionado from './paciente/reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	pacientes: pacientesReducer,
	pacienteSelecionado: pacienteSelecionado,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store
