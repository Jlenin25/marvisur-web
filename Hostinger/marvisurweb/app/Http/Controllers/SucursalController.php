<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sucursal;
use App\Tarifario;
class SucursalController extends Controller
{
    public function extraerSucursalDepartamento()
    {
            $convocatoria = Sucursal::select('departamento')->distinct()->get();
                     return response()->json(['code'=>200,'status'=>'success','convocatoria'=>$convocatoria]); 
      
    }
     public function extraerSucursalCiudad()
    {
            $convocatoria = Sucursal::select('ciudad')->distinct()->get();
            return $json= json_encode($convocatoria);       
    }
    public function extraerSucursal()
    {
$SucursalTodas = Sucursal::select()->orderBy('titulo', 'ASC')->get();                     
return response()->json(['code'=>200,'status'=>'success','sucursales'=>$SucursalTodas]); 
    }
     public function extraerSucursalesPorDepartamento($nombre)
    {
            $SucursalTodas = Sucursal::select('ciudad')->where('departamento', $nombre)->distinct()->get();
                     return response()->json(['code'=>200,'status'=>'success','sucursales'=>$SucursalTodas]); 
    }
     public function extraerSucursalesPorCiudad($nombre)
    {
            $SucursalTodas = Sucursal::select()->where('ciudad', $nombre)->get();
                     return response()->json(['code'=>200,'status'=>'success','sucursales'=>$SucursalTodas]); 
    }
    
     public function extraerSucursalesPorDepartamentoID($id)
    {
            $Sucursal = Sucursal::select()->where('id', $id)->get();
                     return response()->json(['code'=>200,'status'=>'success','sucursales'=>$Sucursal]); 
    }
     public function extraerDestinoSucursalDiferentes()
    {
          $SucursalTodas = Tarifario::select('des_tar')->orderBy('des_tar', 'ASC')->distinct()->get();
                     return response()->json(['code'=>200,'status'=>'success','tarifario'=>$SucursalTodas]);
    }
    
     public function extraerOrigenSucursalDiferentes()
    {
       $SucursalTodas = Tarifario::select('ori_tar')->orderBy('ori_tar', 'ASC')->distinct()->get();
                     return response()->json(['code'=>200,'status'=>'success','sucursales'=>$SucursalTodas]);
    }
    public function buscarTarifarioCiudades(Request $request){
          $json = $request-> input('json',null);
        $params =json_decode($json); 
        $origen=$params->ori_tar;
        $destino=$params->des_tar;
 
        
        $tarifario = Tarifario::select()->where('ori_tar', $origen)->where('des_tar',$destino)->get();
                     return response()->json(['code'=>200,'status'=>'success','tarifario'=>$tarifario]); 
    }
    
}
