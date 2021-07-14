<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Endpoint para verificar se a API está funcionando
Route::get('/', function(){
    return json_encode('Yes! A API funcionando');
});

//Endpoints para listar e pegar 1 paciente
Route::get('pacientes', 'PacientesController@index');
Route::get('paciente/{id}', 'PacientesController@show'); 
