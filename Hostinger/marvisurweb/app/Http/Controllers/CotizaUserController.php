<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CotizaUser;
class CotizaUserController extends Controller
{
    public function extraerCotizaUserAll()
    {
            $cotizacion = CotizaUser::all();
            return $json= json_encode($cotizacion);       
    }
    public function saveCotizaUser(Request $request){
        $json = $request-> input('json',null);
        $params =json_decode($json);
        $params_array = json_decode($json,true);
      
        if(!empty($params_array) ){
          $validate = \Validator::make($params_array,['nombre'=>'required']);
          if($validate->fails()){
                  return response()->json(['code'=>100,'status'=>'failed']); 

              }else{
                  $CotizaUser = new CotizaUser();
                  $CotizaUser->nombre=$params->nombre;
                  $CotizaUser->telefono=$params->telefono;
                  $CotizaUser->correo=$params->correo;
                  $CotizaUser->origen=$params->origen;
                  $CotizaUser->destino=$params->destino;
                  $CotizaUser->cantidad=$params->cantidad;
                  $CotizaUser->unidad=$params->unidad;
                  $CotizaUser->peso=$params->peso;
                  $CotizaUser->largo=$params->largo;
                  $CotizaUser->ancho=$params->ancho;
                  $CotizaUser->alto=$params->alto;
                  $CotizaUser->descripcion=$params->descripcion;
                  $CotizaUser->imagen=$params->imagen;
                  $CotizaUser->dni=$params->dni;
                  $CotizaUser->flag=$params->flag;
               
                  $CotizaUser->save();
                  
                    if($params->imagen=="no hay imagen"){
                        $url="no hay imagen";
                    }else{
                //   $url="http://www.expresomarvisur.com:2082/cpsess0015669461/frontend/paper_lantern/filemanager/showfile.html?file=".$params->imagen."&fileop=&dir=%2Fhome%2Fmarvisurexpreso%2Fpublic_html%2Fmarvisur2.0%2Fmarvisurweb%2Fstorage%2Fapp%2Fimages&dirop=&charset=&file_charset=_DETECT_&baseurl=&basedir=";
                    $url = "https://expresomarvisur.online/marvisurweb/storage/app/images/".$params->imagen;

                    }
                 
                 $mensaje="
                        NOMBRE:     $params->nombre
                        TELEFONO:    $params->telefono
                        CORREO:     $params->correo
                        ORIGEN:     $params->origen
                        DESTINO:       $params->destino
                        CANTIDAD:  $params->cantidad
                        UNIDAD:     $params->unidad
                        PESO:       $params->peso
                        LARGO:  $params->largo
                        ANCHO:    $params->ancho
                        ALTO:    $params->alto
                        DESCRIPCION:    $params->descripcion
                         RUC/DNI: $params->dni
                        IMAGEN :        $url";
                
                    if($params->flag=="0"){
                                                        mail('cotizaciones@expresomarvisur.com',"Nueva Cotizacion!! de ". $params->nombre ,$mensaje); 
                                                         mail('desarrollo.ti.marvisur@gmail.com',"Nueva Cotizacion!! de ". $params->nombre ,$mensaje); 

                    }else{
                                                        mail('cotizaciones@expresomarvisur.com',"Nueva Cotizacion CORPORATIVA !! de ". $params->nombre ,$mensaje); 
                                                        mail('creditosycobranzas@expresomarvisur.com',"Nueva Cotizacion!! de ". $params->nombre ,$mensaje);
                                                        mail('desarrollo.ti.marvisur@gmail.com',"Nueva Cotizacion!! de ". $params->nombre ,$mensaje); 

                    }

                  //mail('desarrollo.sistemas@expresomarvisur.com',"Nueva Cotizacion!! de ". $params->nombre ,$mensaje); 

                  
                  return response()->json(['code'=>200,'status'=>'success','cotizacion'=>$CotizaUser]); 
                  }
        }else{
            
        }
        
    }
     public function  uploadImagen(Request $request){
      //RECOGER DATOS DE LA PETICION

      $file=$request->file('file0');
        $file_name='';
      //SUBIR ARCHIVO
      if ($file){
        $extension = $file->getClientOriginalExtension();
        $file_name=md5(time().$file->getClientOriginalName()).'.'.$extension;        
        \Storage::Disk('images')->put($file_name, \File::get($file));

      //DEVOLVER EL RESULTADO
        $data =array('code'=>200,'status'=>'success','file'=>$file_name);         
      }else{
        $data =array('code'=>400,'status'=>'error', 'message'=>'No se pudo subir el cv');
      }
      return response()->json($data,$data['code']);
    }
}
