<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Convocatoria;
class ConvocatoriaController extends Controller
{
    //
    public function extraerTodos(){
        ini_set('max_execution_time', 180);
         $convocatorias = Convocatoria::where('estado','1')->get();
        
         return response()->json(['code'=>200,'status'=>'success','convocatorias'=>$convocatorias]); 
    }
    public function buscarPorId($id)
    {
            $convocatoria = Convocatoria::where('code',$id)->get();
            return $json= json_encode($convocatoria);    

    }
        
}
