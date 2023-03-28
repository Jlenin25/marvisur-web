<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\EmpleoUser;

class RastreoController extends Controller
{
    
    public function consultaguia(Request $request){
       
        $method = $_SERVER['REQUEST_METHOD'];
        if($method == "OPTIONS") {
            die();
        }

        $json = $request-> input('json',null);
        $params =json_decode($json); 
        $serie=$params->serie;
        $numero=$params->numero;
        
        $myArray = array();
        
        $query = 'CALL TrackGuia2('.$serie.','.$numero.')';
        
        // $mysqli = mysqli_connect("localhost", "u727362413_sistemas", "oN3w2$[!", "u727362413_marvisur");
        // if ($mysqli->connect_errno) 
        // {
        //     echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error; 
        // }                		  
        // if (!($res = $mysqli->query("CALL `TrackGuia2`( '$serie','$numero' );"))) 
        // {
        //     echo "Fetch failed: (" . $mysqli->errno . ") " . $mysqli->error;
        // }
        // while ($row = $res->fetch_array(MYSQLI_ASSOC)) 
        // {
        //     $myArray[] = $row;
        // }
        // mysqli_close($mysqli);
        $myArray = DB::select($query);

        return response()->json([
            'code'=>200,
            'status'=>'success',
            'consultaguia'=>$myArray
        ]);
   }
   public function consultarCantidadGuias(){
       
       
        $myArray = array();
        $query = "SELECT guias as 'cantidad' FROM `informacion` limit 1";
        $myArray = DB::select($query);
        return response()->json(['code'=>200,'status'=>'success','consultaguia'=>$myArray]); 
   }  
}
