<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Departamento;
class DepartamentoController extends Controller
{
    //
    public function extraerDepartamentoAll(){
        
        $departamentos = Departamento::orderBy('nombre')->get();
    
          return response()->json(['code'=>200,'status'=>'success','departamentos'=>$departamentos]); 
    }
    public function extraerDepartamentoID($id)
    {
            $departamento = Departamento::select()->where('id', $id)->first();
                     return response()->json(['code'=>200,'status'=>'success','departamento'=>$departamento]); 
    }

}
