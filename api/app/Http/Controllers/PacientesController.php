<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Pacientes; 


class PacientesController extends Controller
{

    /**
     * Função para retornar todos os pacientes
     */
    public function index(Request  $request){
        try {

            DB::beginTransaction();

            //Opções para trazer os dados paginados
            $page = $request->page ? $request->page : 1;
            //Como não foi solicitado no desafio, inicialmente foi colacado um valor padrão de 99999 registros por página
            $perPage = $request->perPage ? $request->perPage : 99999;

            $result =  Pacientes::paginate($perPage , ['*'],'page',$page);
            
            if(!$result)
                return response()->json(['message'=>'Não há pacientes cadastrados'],404);
            
            DB::commit();
            //Caso queira no futuro retornar os dados paginados basta retornar somente a variável $result
            return response()->json($result->items(), 200);
                
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json($e, 500);
        }
    }

    /**
     * Função para retornar os dados de 1 paciente
     * Parâmetros:
     *  $id -> id do paciente
     */
    public function show($id){
        try {

            DB::beginTransaction();

            $paciente = Pacientes::find($id);
            
            if(!$paciente)
                return response()->json(['message'=>'Paciente não localizado'],404);
            
            DB::commit();
            return response()->json($paciente, 200);
                
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json($e, 500);
        }
    }
    
}
