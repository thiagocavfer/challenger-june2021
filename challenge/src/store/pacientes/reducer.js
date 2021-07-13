const pacientes = [{"id":1,"nome":"Maria Joaquina de Mendonça","data_nascimento":"1949-06-19","telefone":"21 6322-5698","tem_comorbidades":true,"vacinado_covid19":true},{"id":2,"nome":"Ot\u00e1vio de Oliveira Pinto","data_nascimento":"1974-12-01","telefone":"21 6699-8822","tem_comorbidades":false,"vacinado_covid19":true},{"id":3,"nome":"Alo\u00edsio Malta de Alencar Macedo","data_nascimento":"1966-08-23","telefone":"21 6107-8022","tem_comorbidades":true,"vacinado_covid19":true},{"id":4,"nome":"Aline Nepomuceno Costa e Silva","data_nascimento":"2001-08-07","telefone":"21 6988-0356","tem_comorbidades":false,"vacinado_covid19":false},{"id":5,"nome":"Rosemary Azevedo Lins da Silva","data_nascimento":"1980-11-25","telefone":"21 6771-4540","tem_comorbidades":true,"vacinado_covid19":false},{"id":6,"nome":"Henrique Moreira Salas","data_nascimento":"1992-09-07","telefone":"21 7915-7885","tem_comorbidades":false,"vacinado_covid19":false},{"id":7,"nome":"Rorberto Casemiro Almeida Nunes","data_nascimento":"1970-05-11","telefone":"21 7374-7403","tem_comorbidades":true,"vacinado_covid19":true},{"id":8,"nome":"Enzo Rossi Matarazzo","data_nascimento":"2003-02-28","telefone":"21 7778-2325","tem_comorbidades":false,"vacinado_covid19":false},{"id":9,"nome":"Mayla Zimmer Rockenbach ","data_nascimento":"1989-03-17","telefone":"21 7152-8963","tem_comorbidades":false,"vacinado_covid19":false},{"id":10,"nome":"Alice dos Santos Oliveira","data_nascimento":"1956-01-06","telefone":"21 7215-4157","tem_comorbidades":false,"vacinado_covid19":true}];
const paciente = {"id":1,"nome":"Maria Joaquina de Mendonça","data_nascimento":"1949-06-19","telefone":"21 6322-5698","tem_comorbidades":true,"vacinado_covid19":true};

const pacientesReducer = (state = pacientes, action) => {
  return state;
}

const pacienteSelecionado = (state = paciente, action) => {
  return state;
}

export {
  pacientesReducer,
  pacienteSelecionado
};