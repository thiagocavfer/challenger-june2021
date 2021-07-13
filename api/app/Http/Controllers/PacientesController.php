<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Pacientes; 


class PacientesController extends Controller
{

    public function index(Request  $request){
        try {

            DB::beginTransaction();

            $page = $request->page ? $request->page : 1;
            $perPage = $request->perPage ? $request->perPage : 99999;

            $result =  Pacientes::paginate($perPage , ['*'],'page',$page);
            
            if(!$result)
                return response()->json(['message'=>'Não há pacientes cadastrados'],404);
            
            DB::commit();
            return response()->json($result->items(), 200);
                
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json($e, 500);
        }
    }

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
