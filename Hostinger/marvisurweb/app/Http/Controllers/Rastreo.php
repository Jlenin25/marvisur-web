<?php
    class Rastreo{
        
        public function esteMetodo()
        {
            $pdo = require 'connect.php'; 
            return $pdo;
        }
        public function consultar(){
            $serie = '0002';
            $numero = '88722';
            $sql = 'CALL TrackGuia2( ?, ? )';
        
            $statement = $this->esteMetodo()->prepare($sql);
        
            $statement->execute(array($serie, $numero));
        
            $publishers = $statement->fetchAll(PDO::FETCH_ASSOC);
        
            //print_r($publishers);
            return response()->json([
                'code'=>200,
                'status'=>'success',
                'consultaguia'=>$publishers
            ]);
        }
    }
    
    $ra = new Rastreo;
    $ra ->consultar();

?>