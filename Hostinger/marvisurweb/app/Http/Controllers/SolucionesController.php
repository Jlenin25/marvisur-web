<?php



namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Soluciones;


class SolucionesController extends Controller
{
    public function extraerSoluciones()
    {
            $soluciones = Soluciones::all();
            return $json= json_encode($soluciones);       
    }
     public function  uploadArchivoAdjunto(Request $request){
      //RECOGER DATOS DE LA PETICION
      $file=$request->file('file0');
      $file_name='';
      //SUBIR ARCHIVO
      if ($file){
         $extension = $file->getClientOriginalExtension();
         $file_name=md5(time().$file->getClientOriginalName()).'.'.$extension;        
        \Storage::Disk('adjuntos')->put($file_name, \File::get($file));

      //DEVOLVER EL RESULTADO
        $data =array('code'=>200,'status'=>'success','file'=>$file_name);         
      }else{
 
        $data =array('code'=>400,'status'=>'error', 'message'=>'No se pudo adjuntar el archivo');
      }
      return response()->json($data,$data['code']);
    }
    public function savePedidoSolucion(Request $request)
    {
       
        $json = $request-> input('json',null);
        $params =json_decode($json);
        $params_array = json_decode($json,true);

        if(!empty($params_array) ){
          $validate = \Validator::make($params_array,['nombres_sol'=>'required']);
          if($validate->fails()){
              return response()->json(['code'=>100,'status'=>'failed']); 
              }else{
                  $Soluciones = new Soluciones();
                  $Soluciones->nombres_sol=$params->nombres_sol;
                  $Soluciones->serie_sol=$params->serie_sol;
                  $Soluciones->numero_sol=$params->numero_sol;
                  $Soluciones->origen_sol=$params->origen_sol;
                  $Soluciones->destino_sol=$params->destino_sol;
                  $Soluciones->correo_sol=$params->correo_sol;
                  $Soluciones->celular_sol=$params->celular_sol;
                  $Soluciones->inconveniente_sol=$params->inconveniente_sol;
                  $Soluciones->detalle_sol=$params->detalle_sol;
                  $Soluciones->adjuntar_sol=$params->adjuntar_sol;
                  $Soluciones->estado_sol=$params->estado_sol;
                  $Soluciones->save();
                  $Soluciones->id;
                    if($params->adjuntar_sol=="No hay archivo"){
                        $url="No hay archivo";
                    }else{
                        // $url="http://www.expresomarvisur.com:2082/cpsess0015669461/frontend/paper_lantern/filemanager/showfile.html?file=".$params->adjuntar_sol."&fileop=&dir=%2Fhome%2Fmarvisurexpreso%2Fpublic_html%2Fmarvisur2.0%2Fmarvisurweb%2Fstorage%2Fapp%2Fadjuntos&dirop=&charset=&file_charset=_DETECT_&baseurl=&basedir=";
                        $url = "https://expresomarvisur.online/marvisurweb/storage/app/adjuntos/".$params->adjuntar_sol;


                    }
                      
                    // $url="http://www.expresomarvisur.com:2082/cpsess5892275094/frontend/paper_lantern/filemanager/showfile.html?file=".$params->cv."&fileop=&dir=%2Fhome%2Fmarvisurexpreso%2Fpublic_html%2FBack%2Fstorage%2Fapp%2Fcv_empleos&dirop=&charset=&file_charset=_DETECT_&baseurl=&basedir=";
                
                 
                 $mensaje="
                        NOMBRE:     $params->nombres_sol
                        SERIE:    $params->serie_sol
                        NUMERO:     $params->numero_sol
                        ORIGEN:     $params->origen_sol
                        DESTINO:       $params->destino_sol
                        CORREO:  $params->correo_sol
                        CELULAR:     $params->celular_sol
                        INCONVENIENTE:       $params->inconveniente_sol
                        DETALLE:  $params->detalle_sol
                        CODIGO-SOLUCION: $Soluciones->id
                     
                      
                        ADJUNTO :        $url";
                
                //mail('desarrollo.sistemas@expresomarvisur.com',"Nueva peticion de Solucion en Linea ". $params->nombres_sol ,$mensaje); 
                    
                  //mail('solucionesenlinea@expresomarvisur.com',"Nueva peticion de Solucion en Linea ". $params->nombres_sol ,$mensaje); 
                  //mail('desarrollo.ti.marvisur@gmail.com',"Nueva peticion de Solucion en Linea ". $params->nombres_sol ,$mensaje); 
                  //mail($params->correo_sol,"Nueva peticion de Solucion en Linea ". $params->nombres_sol ,$mensaje);
                  /*$mail1->addAddress('desarrollo.ti.marvisur@gmail.com');
                  $mail1->Subject = "Nueva peticion de Solucion en Linea ". $params->nombres_sol;
                  $mail1->Body = $mensaje;
                  $mail1->send();
*/
                    
                  return response()->json(['code'=>200,'status'=>'success','soluciones'=>$Soluciones]); 
                 
              }
        }else{
            
        }    
    }
}
