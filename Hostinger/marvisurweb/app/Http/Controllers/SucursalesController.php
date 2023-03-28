<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sucursales;
class SucursalesController extends Controller
{
    public function extraerSucursalesAll()
    {
            $sucursales = Sucursales::all();
            return $json= json_encode($sucursales);       
    }
    public function saveSucursales(Request $request){
        $json = $request-> input('json',null);
        $params =json_decode($json);
        $params_array = json_decode($json,true);
      
        if(!empty($params_array) ){
          $validate = \Validator::make($params_array,['serie'=>'required','nomsuc'=>'required','direcsuc'=>'required','emailsuc'=>'required']);
          if($validate->fails()){
                  return response()->json(['code'=>100,'status'=>'failed']); 
              }else{
                  $Sucursales = new Sucursales();
                  $Sucursales->serie=$params->serie;
                  $Sucursales->nomsuc=$params->nomsuc;
                  $Sucursales->direcsuc=$params->direcsuc;
                  $Sucursales->emailsuc=$params->emailsuc;
                  $Sucursales->save();
                  return response()->json(['code'=>200,'status'=>'success']); 
                  }
        }else{ 
        } 
    }
    public function savee(){
        return "asdasd";
    }
}
