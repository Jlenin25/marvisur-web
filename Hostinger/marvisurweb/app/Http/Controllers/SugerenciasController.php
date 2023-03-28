<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sugerencias;

class SugerenciasController extends Controller
{
    //
    public function extraerTodos(){
        ini_set('max_execution_time', 180);
         $sugerencias = Sugerencias::all();
        
         return response()->json(['code'=>200,'status'=>'success','convocatorias'=>$sugerencias]); 
    }
   public function saveSugerencia(Request $request)
    {
       
        $json = $request-> input('json',null);
        $params =json_decode($json);
        $params_array = json_decode($json,true);
       
        if(!empty($params_array) ){
          $validate = \Validator::make($params_array,['det_sug'=>'required']);
          if($validate->fails()){
              return response()->json(['code'=>100,'status'=>'failed']); 
              }else{
                  $Sugerencias = new Sugerencias();
                  $Sugerencias->nom_sug=$params->nom_sug;
                  $Sugerencias->tel_sug=$params->tel_sug;
                  $Sugerencias->ciu_sug=$params->ciu_sug;
                  $Sugerencias->det_sug=$params->det_sug;
                  $Sugerencias->est_sug=$params->est_sug;                 
                  $Sugerencias->save();
                  
             

                 $mensaje="
                        NOMBRE:     $params->nom_sug
                        TELEFONO:    $params->tel_sug
                        CIUDAD:     $params->ciu_sug
                        DETALLE DE SUGERENCIA:     $params->det_sug";
                     htmlentities($mensaje, ENT_QUOTES, "UTF-8"); 

                  mail('marketing@expresomarvisur.com',"Nueva Sugerencia!! ",$mensaje); 
                  mail('creditosycobranzas@expresomarvisur.com',"Nueva Sugerencia!! ",$mensaje); 
                  mail('desarrollo.ti.marvisur@gmail.com',"Nueva Sugerencia!! ",$mensaje); 

                      
                  return response()->json(['code'=>200,'status'=>'success','sugerencias'=>$Sugerencias]); 
                 
              }
        }else{
            
        }    
    }
        
}
