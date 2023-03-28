<?php

// Importamos la clase para la conexión a la BD
include("conexion.php");
include("../marvi_mailer.php");
//Recibir datos 
$datin = 0;//$_POST['num'];
/////sucursal
$datin1 = $_POST['correo'];
$claimer_mail = $_POST['email'];



// Verificamos si se ha ingresado algo en el recuadro de email del reclamante
if(isset($_POST['email'])) {
    
    //$con=mysqli_connect("localhost","marvi","marvi","testdb");

        $rst=mysqli_query($con,"INSERT INTO hojas (
          rec_fecha,sucu,rec_sucursal,
          rec_nombre,rec_direccion,rec_dni,rec_telefono,rec_email,rec_apoderado,
          rec_monto,rec_comentarios,rec_guia,rec_tipo1,rec_detalle,rec_tipo, rec_numero)
         
        values (
          '". $_POST["fecha"]."'
          ,'". $_POST["sucursal"]."'
          ,'". $_POST["direccionsuc"]."'
          ,'". $_POST["nombre"]."'
          ,'". $_POST["direccion"]."'
          ,'". $_POST["dni"]."'
          ,'". $_POST["telefono"]."'
          ,'". $_POST["email"]."'
          ,'". $_POST["padre"]."'
          ,'". $_POST["monto"]."'
          ,'". $_POST["comentarios"]."'
          ,'". $_POST["serie"]. " - " . $_POST["guia"]."'
          ,'". $_POST["tipo1"]."'
          ,'". $_POST["detalle"]."'
          ,'". $_POST["pedido"]."'
          ,'". $_POST["num"]."'
          );");

          $datin = mysqli_insert_id($con);
          
    // Datos para el correo
    $destinatario1 = "apd.administrativo@expresomarvisur.com";
    $destinatario8 = "desarrollo.ti.marvisur@gmail.com";
     $destinatario3 = "reclamos@expresomarvisur.com";
    $destinatario2 = "asesoria.legal.lima3@expresomarvisur.com";
    // Datos para el correo

    $asunto = "RECLAMO - ". $_POST['nombre'] ."";

    //Seteamos el cuerpo del mensaje

    $carta =  "DATOS DEL RECLAMO:\n";
    $carta .= "**************************************************************\n";
    $carta .= "Fecha     : " . $_POST['fecha'] . "\n";
    $carta .= "Sucursal  : " . $_POST['sucursal'] . "\n";
    $carta .= "Nombre    : " . utf8_decode($_POST['nombre']) . "\n";
    $carta .= "Telefono  : " . $_POST['telefono'] . "\n";
    $carta .= "Email     : " . $_POST['email'] . "\n";
    $carta .= "Detalle   : " . utf8_decode($_POST['detalle']) . "\n";
    $carta .= "Pedido    : " . utf8_decode($_POST['pedido']) . "\n";
    $carta .= "Detalles  : https://www.expresomarvisur.online/reclamaciones/print.php?numero=$datin\n";
    $carta .= "**************************************************************\n";
    
    /* Enviando Mensaje
    mail($destinatario1, $asunto, $carta);
    //mail($destinatario2, $asunto, $carta);
    mail($destinatario3, $asunto, $carta);
    mail($datin1, $asunto, $carta);
    
    mail($destinatario8, $asunto, $carta);
    mail($claimer_mail, $asunto, $carta);
    */
    $mail1->Subject = $asunto;
    $mail1->Body = $carta;
    $mail1->addAddress($claimer_mail);
    $mail1->send();
    $mail1->clearAddresses();
    $mail1->addAddress($datin1);
    $mail1->addAddress($destinatario1);
    $mail1->addAddress($destinatario3);
    $mail1->addAddress($destinatario8);
    
//$mail->addAttachment('test.txt');
    $mail1->send();
/*
if (!$mail1->send()) {
    echo 'Mailer Error: ' . $mail1->ErrorInfo;
} else {
    echo 'The email message was sent.';
}
*/
    mysqli_close($con);
    include 'header.php';
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
            <input type="text" name="numero" value="<?php echo $datin ?>" style="visibility:hidden">
              <CENTER>
                <div class="alert alert-success" role="alert">
                  <strong>¡OPERACIÓN EXITOSA!</strong> Disculpe las molestias ocasionadas, nos estaremos comunicando con usted muy pronto.
                </div>
              </CENTER>
              <CENTER>
                <a href='../' class="btn btn-danger btn__marvi btn-lg ">VOLVER</a>
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


