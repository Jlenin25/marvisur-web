<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cv;
class CvController extends Controller
{
    public function extraerCvAll()
    {
            $cv = Cv::all();
            return $json= json_encode($cv);       
    }
    public function saveCv(Request $request){
        $json = $request-> input('json',null);
        $params =json_decode($json);
        $params_array = json_decode($json,true);

        if(!empty($params_array) ){
          $validate = \Validator::make($params_array,[]);
          if($validate->fails()){
              return response()->json(['code'=>100,'status'=>'failed']); 
              }else{
                  $Cv = new Cv();
                  $Cv->apellidosNombres=$params->nombresyape;
                  $Cv->telefono=$params->telefono;
                  $Cv->email=$params->email;
                  $Cv->direccion=$params->direccion;
                  $Cv->edad=$params->edad;
                  $Cv->expectativaSalarial=$params->expectativaSalarial;
                  $Cv->cv=$params->cv;
                
                  $Cv->save();
             
                  
                // $url="http://www.expresomarvisur.com:2082/cpsess5892275094/frontend/paper_lantern/filemanager/showfile.html?file=".$params->cv."&fileop=&dir=%2Fhome%2Fmarvisurexpreso%2Fpublic_html%2FBack%2Fstorage%2Fapp%2Fcv_empleos&dirop=&charset=&file_charset=_DETECT_&baseurl=&basedir=";
                
                // $url="http://www.expresomarvisur.com:2082/cpsess1940281939/frontend/paper_lantern/filemanager/showfile.html?file=".$params->cv."&fileop=&dir=%2Fhome%2Fmarvisurexpreso%2Fpublic_html%2Fmarvisur2.0%2Fmarvisurweb%2Fstorage%2Fapp%2Fcvs&dirop=&charset=&file_charset=_DETECT_&baseurl=&basedir=";
                $url = "https://expresomarvisur.online/marvisurweb/storage/app/cvs/".$params->cv;
                 
                 /*$mensaje="
                        Puesto:     $params->puesto
                        Nombre:     $params->nombresyape
                        Telefono:   $params->telefono
                        Correo:     $params->email
                        Edad:       $params->edad
                        Direccion:  $params->direccion
                        Salario:    $params->expectativaSalarial
                        CV :        $url"; */
                
                $mensaje="
                        Puesto:     $params->puesto
                        CV :        $url";
                     if($params->lugar == 'LIMA') {
                                          mail('recursos.humanos.lima@expresomarvisur.com',"Nueva Postulacion!! de ". $Cv->apellidosNombres." Puesto :".$params->puesto,$mensaje); 
                                          mail('desarrollo.ti.marvisur@gmail.com',"Nueva Postulacion!! de ". $Cv->apellidosNombres." Puesto :".$params->puesto,$mensaje); 

                     }  else{
                                        mail('trabajaconnosotros@expresomarvisur.com',"Nueva Postulacion!! de ". $Cv->apellidosNombres." Puesto :".$params->puesto,$mensaje);  
                                         mail('desarrollo.ti.marvisur@gmail.com',"Nueva Postulacion!! de ". $Cv->apellidosNombres." Puesto :".$params->puesto,$mensaje); 
                                        
                    // mail('desarrollo.ti@expresomarvisur.com',"Nueva Postulacion!! de ". $Cv->apellidosNombres." Puesto :".$params->puesto,$mensaje);       

                     }
                  //mail('desarrollo.sistemas@expresomarvisur.com',"Nueva Postulacion!! de ". $Cv->apellidosNombres." Puesto :".$params->puesto,$mensaje);       
                   //mail('trabajaconnosotros@expresomarvisur.com',"Nueva Postulacion!! de ". $Cv->apellidosNombres." Puesto :".$params->puesto,$mensaje);       

                                    return response()->json(['code'=>200,'status'=>'success','cv'=>$Cv]); 

              }
        }else{
            
        }  
    }
            
  
    public function  uploadcv(Request $request){
      //RECOGER DATOS DE LA PETICION

      $file=$request->file('file0');
        $file_name='';
      //SUBIR ARCHIVO
      if ($file){
        $extension = $file->getClientOriginalExtension();
        $file_name=md5(time().$file->getClientOriginalName()).'.'.$extension;
       
        \Storage::Disk('cvs')->put($file_name, \File::get($file));
      //DEVOLVER EL RESULTADO
        $data =array('code'=>200,'status'=>'success','file'=>$file_name);         
      }else{
        $data =array('code'=>400,'status'=>'error', 'message'=>'No se pudo subir el cv');
      }
      return response()->json($data,$data['code']);
    }
}
