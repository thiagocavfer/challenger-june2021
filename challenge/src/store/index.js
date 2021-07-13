import { createStore, combineReducers, applyMiddleware } from 'redux';
import {pacientesReducer, pacienteSelecionado} from './pacientes/reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	pacientes: pacientesReducer,
	pacienteSelecionado: pacienteSelecionado,
});



const store = createStore(reducers, applyMiddleware(thunk));

export default store