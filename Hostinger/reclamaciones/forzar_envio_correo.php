<?php

// Importamos la clase para la conexión a la BD
include("conexion.php");

include("../marvi_mailer.php");

//Recibir datos 
$datin = 0;//$_POST['num'];

$dato1 = $_GET['numero'];
/////sucursal



// Verificamos si se ha ingresado algo en el recuadro de email del reclamante
if(isset($dato1)) {
  $rst2=mysqli_query($con,"SELECT h.rec_fecha, h.sucu, h.rec_nombre, h.rec_telefono, h.rec_email, h.rec_detalle, s.correo, h.rec_tipo FROM hojas h 
  inner join sucursal s on s.titulo=h.sucu
  WHERE h.idreclamo = $dato1");
  if (!$rst2) {
    echo 'No se pudo ejecutar la consulta: ' . mysqli_error($con);
    exit;
  }
    $rst = mysqli_fetch_row($rst2);
    
    
    // Datos para el correo
    //$x = "desarrollo.ti@expresomarvisur.com";
    echo 'Mensajito: ' . $rst[0]. ' - '.$rst[2];
    $destinatario1 = "apd.administrativo@expresomarvisur.com";
    $destinatario8 = "apd.operativo@expresomarvisur.com";
    $destinatario3 = "reclamos@expresomarvisur.com";
    $destinatario2 = "asesoria.legal.lima3@expresomarvisur.com";
    $destinatario4 = "jefaturacontrolinterno@expresomarvisur.com";
    $destinatario5 = "desarrollo.ti.marvisur@gmail.com";

    // Datos para el correo

    $asunto = "RECLAMO - ". $rst[2] ."";

    //Seteamos el cuerpo del mensaje

    $carta =  "DATOS DEL RECLAMO:\n";
    $carta .= "**************************************************************\n";
    $carta .= "Fecha     : " . $rst[0] . "\n";
    $carta .= "Sucursal  : " . $rst[1] . "\n";
    $carta .= "Nombre    : " . $rst[2] . "\n";
    $carta .= "Telefono  : " . $rst[3] . "\n";
    $carta .= "Email     : " . $rst[4] . "\n";
    $carta .= "Detalle   : " . utf8_decode($rst[5]) . "\n";
    $carta .= "Pedido    : " . utf8_decode($rst[7]) . "\n";
    $carta .= "Detalles  : https://expresomarvisur.online/reclamaciones/print.php?numero=$dato1\n";
    $carta .= "**************************************************************\n";
    
$mail1->Subject = $asunto;
$mail1->Body = $carta;
$mail1->addAddress($destinatario1);
$mail1->addAddress($destinatario2);
$mail1->addAddress($destinatario3);
$mail1->addAddress($destinatario4);
$mail1->addAddress($destinatario5);
$mail1->addAddress($destinatario8);

if (!$mail1->send()) {
    echo 'Mailer Error: ' . $mail1->ErrorInfo;
} else {
    echo '</br><>Numero de Reclamo:' . $dato1 . '</br>';
    echo '<> Correo:' . $destinatario1 . '</br>';
    echo '<> Correo:' . $destinatario2 . '</br>';
    echo '<> Correo:' . $destinatario3 . '</br>';
    echo '<> Correo:' . $destinatario4 . '</br>';
    echo '<> Correo:' . $destinatario5 . '</br>';
    echo '<> Correo:' . $destinatario8 . '</br>';
    echo '</br>****************************</br>';
    echo 'The email message was send. </br>';
    echo '****************************</br>';
}

//$mail->addAttachment('test.txt');


    
    /* Enviando Mensaje
    mail($destinatario1, $asunto, $carta);
    mail($destinatario2, $asunto, $carta);
    mail($destinatario3, $asunto, $carta);
    mail($datin1, $asunto, $carta);
    $exito = mail($destinatario8, $asunto, $carta,$headers);

    //mail($destinatario3, $asunto, $carta);
    //mail($rst[6], $asunto, $carta);
    
    // Verificamos si el correo ha sido enviado
    //if($mail->Send()){
        
    if ($exito){
        echo 'Mensaje enviado ' .$destinatario8;
        echo '<h3>'.$asunto.'</h3';
        echo '<h3>'.$carta.'</h3';
    }
    else
    {
    echo"Error de envio";
    echo '<h3>'.$asunto.'</h3';
    echo '<h3>'.$carta.'</h3';
    echo '<h3>'.$exito.'</h3';
    }
    */
    
   
    
    
 
    mysqli_close($con);
    include 'header.php';
        
        
    //}
        
        // ENVÍO EXITOSO, lo que nos da luz verde para la inserción del reclamo en la base de datos
        
?>





<html lang="en">
<head>
      <script src="./js/custom.js"></script>
   </head>
<body onload="nobackbutton();">

    <div class="container" >
      <center>
        <div class="panel panel-info" style="margin-top:50px;">
          <div class="panel-title">
            <h4 class="h4__subtitles h4__index" style="margin-top:35px;">REGISTRO DE HOJA DE RECLAMO</h4>
          </div>
          <form name="consulta1" method="get" action="print.php">
            <input type="text" name="numero" value="<?php echo $dato1 ?>" style="visibility:hidden"/>
              <CENTER>
                <div class="alert alert-success" role="alert">
                  <strong>¡OPERACIÓN EXITOSA!</strong> Disculpe las molestias ocasionadas, nos estaremos comunicando con usted muy pronto.
                </div>
              </CENTER>
              <CENTER>
                <a href='https://www.expresomarvisur.com/' class="btn btn-danger btn__marvi btn-lg ">VOLVER</a>
                <button type="submit" class="btn  btn-danger btn__marvi btn-lg" >IMPRIMIR</button>
              </CENTER>                                             
          </form>
        </div>
      </center>
    </div>
    

      
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="boots/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="../boots/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>

</body>
</html>
<?php
}
else{
  ?>
  <html lang="en">
<head>
      <script src="./js/custom.js"></script>
   </head>
<body onload="nobackbutton();">

    <div class="container" >
      <h1>HOLA</h1>
</div>
</body>
</html>

<?php
}




/********************** CÓDIGO ORIGINAL***************************


$datin = $_POST['num'];
$datin1 = $_POST['correo'];


if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias

$email_to = "sistemas@expresomarvisur.com,recursos.humanos@marvisur.pe,sr.daniel.aqp@gmail.com,apd.marvisur@gmail.com,controlinterno3@marvisur.pe,$datin1";

$email_subject = "RECLAMO - ". $_POST['nombre'] ."";


// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['fecha'])||
!isset($_POST['sucu']) ||
!isset($_POST['sucursal']) ||
!isset($_POST['nombre']) ||
!isset($_POST['telefono']) ||
!isset($_POST['email']) ||
!isset($_POST['detalle'])

)

$email_message = "DATOS DEL RECLAMO:\n";
$email_message .= "**************************************************************\n";
$email_message .= "Fecha     : " . $_POST['fecha'] . "\n";
$email_message .= "Sucursal  : " . $_POST['sucursal'] . "\n";
$email_message .= "Nombre    : " . $_POST['nombre'] . "\n";
$email_message .= "Telefono  : " . $_POST['telefono'] . "\n";
$email_message .= "Email     : " . $_POST['email'] . "\n";
$email_message .= "Detalle   : " . $_POST['detalle'] . "\n";
$email_message .= "Detalles  : http://reclamaciones.expresomarvisur.com/print.php?numero=$datin\n";
$email_message .= "**************************************************************\n";

// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '. $_POST['email'] ."\r\n".
'Reply-To: '. $_POST['email'] ."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers)

}

/*
// Inserción en la base de datos

$rst=mysql_query("INSERT INTO hojas (
  rec_fecha,sucu,rec_sucursal,
  rec_nombre,rec_direccion,rec_dni,rec_telefono,rec_email,rec_apoderado,
  rec_tipo,rec_comentarios,rec_guia,rec_tipo1,rec_detalle,rec_adoptadas)
 
values (
   '". $_POST["fecha"]."'
   ,'". $_POST["sucursal"]."'
  ,'". $_POST["direccion"]."'
  ,'". $_POST["nombre"]."'
  ,'". $_POST["direccion"]."'
  ,'". $_POST["dni"]."'
  ,'". $_POST["telefono"]."'
  ,'". $_POST["email"]."'
  ,'". $_POST["padre"]."'
  ,'". $_POST["tipo"]."'
  ,'". $_POST["comentarios"]."'
  ,'". $_POST["guia"]."'
  ,'". $_POST["tipo1"]."'
  ,'". $_POST["detalle"]."'
  ,'". $_POST["acciones"]."'

  );");

*/

 

?>


