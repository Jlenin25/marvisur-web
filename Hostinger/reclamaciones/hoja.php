<?php
$sucursal = $_POST['sucursal'];
include 'header.php';
?>

<html lang="en">
<center>
  <div class="panel panel-default panel__reclamo_title">

    <form accept-charset="UTF-8" name="miformulario" role="form" method="POST" action="fin_reclamo.php">
      <div class="container" style="margin-top:50px;">
        <div class="row">
          <div class="col-md-6">
            <div class="panel panel-default">
              <div class="panel-body">
                <tr>
                  <td width="540" height="20">
                    <h4 class="h4__subtitles">1. Sucursal donde sucedió el hecho</h4>
                  </td>
                </tr>
                <table>
                  <tr>
                    <td width="520" height="10"><B>CÓDIGO RECLAMO&nbsp;&nbsp;</td>
                  </tr>
                </table>
                <div class="form-group">

                  <?php
                  include 'conexion.php';

                  $resultado = mysqli_query($con, "select max(idreclamo) from hojas");
                  if (!$resultado) {
                    echo 'No se pudo ejecutar la consulta: ' . mysqli_error($con);
                    exit;
                  }
                  $v1 = mysqli_fetch_row($resultado);
                  $sql = "SELECT titulo, direccion, correo, telefono_terciario FROM sucursal WHERE titulo='" . $sucursal . "'";
                  $result = mysqli_query($con, $sql);
                  date_default_timezone_set('America/lima');
                  // verificamos que no haya error 
                  echo "";

                  //ejecutamos la consulta                        
                  if (!$result) {
                    echo "La consulta SQL contiene errores." . mysqli_error($con);
                    exit();
                  } else {
                    //obtenemos los datos resultado de la consulta 
                    while ($row = mysqli_fetch_row($result)) {
                      $sucursal = $row[0];
                      $direccionsuc = $row[1];
                      $correo = $row[2];
                      $serie = $row[3];
                      $hora = date('d/m/Y g:ia');
                      echo " 
                              <input class='form-control'  name='num' type='text' value='" . "$serie" . " - " . ($v1[0] + 1) . "'  readonly='Readonly' required>
                    
                  </div>
                  <table>
                    <tr><td width='520' height='10'><B>FECHA&nbsp;&nbsp;</td></tr>
                  </table>
                  <div class='form-group'>
                    <input class='form-control'  name='fecha' type='text' value='$hora' readonly='readonly' required>
                  </div>
                  <table>
                    <tr><td width='520' height='10'><B>SUCURSAL&nbsp;&nbsp;</td></tr>
                  </table>
                  <div class='form-group'>
                            
                              <input class='form-control'  name='sucursal' type='text' value='$sucursal' readonly='readonly'>
                              </div>
                             <table>      
                
                                        <tr>
                                            <td width='520' height='10'><B>DIRECCIÓN SUCURSAL</td>
                                           
                                        </tr>

                              </table>

                            <div class='form-group'>
                              <input class='form-control' name='direccionsuc' type='text' value='$direccionsuc' readonly='readonly'>
                              </div>
                              <table>      
                
                              <tr>
                                  <td width='520' height='10'><B>CORREO&nbsp;&nbsp;</td>
                                 
                              </tr>

                    </table>

                    <div class='form-group'>
                      <input class='form-control'  name='correo' type='text' value='$correo' readonly='readonly' >
                  </div>

                              ";
                    }
                  }
                  mysqli_close($con);

                  ?>


                  <tr>
                    <td width="540" height="20">
                      <h4 class="h4__subtitles">2. Identificación del Cliente:</h4>
                    </td>
                  </tr>

                  <table>

                    <tr>
                      <td width="520" height="10"><B>NOMBRE / R. SOCIAL&nbsp;&nbsp;</td>

                    </tr>

                  </table>


                  <div class="form-group">
                    <input class="form-control" name="nombre" type="text" placeholder="Juan Perez Perez" required>
                  </div>

                  <table>

                    <tr>
                      <td width="520" height="10"><B>DIRECCIÓN&nbsp;&nbsp;</td>

                    </tr>

                  </table>

                  <div class="form-group">
                    <input class="form-control" name="direccion" type="text" placeholder="Calle Peru 201" required>
                  </div>

                  <table>
                    <tr>
                      <td width="520" height="10"><B>DNI / RUC&nbsp;&nbsp;</td>
                    </tr>
                  </table>
                  <div class="form-group">
                    <input class="form-control" name="dni" type="number" placeholder="47854848" required>
                  </div>

                  <table>
                    <tr>
                      <td width="520" height="10"><B>TELÉFONO&nbsp;&nbsp;</td>
                    </tr>
                  </table>
                  <div class="form-group">
                    <input class="form-control" name="telefono" type="number" placeholder="958804798" required>
                  </div>

                  <table>
                    <tr>
                      <td width="520" height="10"><B>EMAIL&nbsp;&nbsp;</td>
                    </tr>
                  </table>
                  <div class="form-group">
                    <input class="form-control" name="email" type="email" placeholder="tucorreo@gmail.com" required>
                  </div>
                  <table>
                    <tr>
                      <td width="520" height="10"><B>PADRE / MADRE (para menores de edad)&nbsp;&nbsp;</td>
                    </tr>
                  </table>
                  <div class="form-group">
                    <input class="form-control" name="padre" type="text" placeholder="Opcional">
                  </div>

                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="panel panel-default">

                <div class="panel-body">

                  <tr>
                    <td width="540" height="20">
                      <h4 class="h4__subtitles">3. Identificación del Bien Contratado:</h4>
                    </td>
                  </tr>
                  <!--
                              <table>      
                                      <tr>
                                          <td width="520" height="20"><B>SELECCIONE TIPO&nbsp;&nbsp;</td>      
                                      </tr>
                              </table>                                    
                                <div class="form-group">
                                  <tr>

                                  <td>

                                    <select name="tipo" id="tipo" class="form-control" readonly='readonly'>
                                   
                                    <option value="Servicio">SERVICIO</option>                               
                                    </select>
                                  </td>
                                 </tr>
                                </div>
                            

                                <table>      
                                      <tr>
                                          <td width="520" height="20"><B>SELECCIONE TIPO&nbsp;&nbsp;</td>      
                                      </tr>
                              </table>                                    
                                <div class="form-group">
                                  <td>
                                    <select name="tipo1" id="tipo1" class="form-control" required>
                                        <option value="Queja"> QUEJA</option>
                                        <option value="Reclamo"> RECLAMO</option>                               
                                    </select>
                                  </td>
                                </div>-->

                  <label class="radio-inline">
                    <input type="radio" name="tipo1" id="tipo1" value="Queja" REQUIRED> Queja
                  </label>
                  <label class="radio-inline">
                    <input type="radio" name="tipo1" id="tipo1" value="Reclamo" REQUIRED> Reclamo
                  </label>

                  <table>
                    <tr>
                      <td width="520" height="20"><B>COMENTARIOS&nbsp;&nbsp;</td>
                    </tr>
                  </table>


                  <div class="form-group">
                    <textarea class="form-control" name="comentarios" id="comentarios" cols="35" rows="4" required onchange="testLength(this)" onkeyup="testLength(this)" onpaste="testLength(this)"></textarea>
                    <H6>(MAX 500 CARACTERES)</H6>

                    <script>
                      var maxLength = 500;

                      function testLength(campo) {
                        if (campo.value.length > maxLength) {
                          campo.value = campo.value.substring(0, maxLength);
                          alert("Por Favor, el comentario no debe exceder de 500 caracteres");
                        }
                      }
                    </script>

                  </div>
                  <div class="form-group">
                    <table>
                      <tr>
                        <td width="520" height="40"><B>NRO. DE GUÍA&nbsp;&nbsp;</td>
                      </tr>
                    </table>
                  </div>
                  <!-- <div class="form-group">
                                  <input class="form-control"  name="guia" type="text" placeholder="0002 - 004525" required>
                                </div> -->

                  <div class="form-group guia__container">
                    <div class="guia__numero">
                      <input class="form-control input__guia" name="serie" type="text" placeholder="Serie:(0002)">
                    </div>
                    <div class="guia__centro">
                      <label class="label__guia">-</label>
                    </div>
                    <div class="guia__numero guia__der">
                      <input class="form-control input__guia" name="guia" type="text" placeholder="Número:(20921)">
                    </div>
                  </div>


                  <div class="form-group">
                    <table>
                      <tr>
                        <td width="520" height="20"><B>MONTO</B></td>
                      </tr>
                    </table>
                  </div>

                  <div class="form-group">
                    <input class="form-control" name="monto" id='monto' type="number" step='0.1' placeholder="12.00" required>
                  </div>
                </div>



                <tr>
                  <td width="50" height="50">
                    <h4 class="h4__subtitles">4. Detalle del reclamo y pedido del consumidor:</h4>
                  </td>

                </tr>

                <table>
                  <tr>
                    <td width="520" height="20"><B>DETALLE</B></td>
                  </tr>
                </table>
                <div class="form-group">
                  <td>
                    <textarea class="form-control" required name="detalle" id="detalle" cols="35" rows="4"></textarea>
                    <H6>(MAX 8000 CARACTERES)</H6>
                  </td>
                </div>

                <table>
                  <tr>
                    <td width="520" height="20"><B>PEDIDO&nbsp;&nbsp;</td>
                  </tr>
                </table>
                <div class="form-group">
                  <td>
                    <textarea class="form-control" name="pedido" id="pedido" placeholder="" cols="35" rows="4"></textarea>
                  </td>
                </div>
                <!--
                                <table>      
                                      <tr>
                                          <td width="520" height="20"><B>ACCIONES ADOPTADAS POR EL PROVEEDOR&nbsp;&nbsp;</td>      
                                      </tr>
                              </table>                                    
                                <div class="form-group">
                                  <td>
                                    <textarea  class="form-control" placeholder="DATOS INGRESADOS POR LA EMPRESA..." name="acciones" id="acciones" placeholder="" cols="35" rows="4"></textarea>
                                </td>
                                </div> -->
                <a class="btn btn-lg btn-hover btn-danger btn-block" href="./"> Cancelar </a>
                <input class="btn btn-lg btn-hover btn-danger btn-block " type="submit" name="btnEnviar" value="Registrar">

              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>


  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="js/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="js/bootstrap.min.js"></script>
  <script src="boots/js/bootstrap.min.js"></script>

  <script>
    function confirmEnviar() {
      miformulario.btnEnviar.disabled = true;
      miformulario.btnEnviar.value = "Enviando...";
      miformulario
      miformulario.submit();
      setTimeout(function() {
        miformulario.btnEnviar.disabled = false;
        miformulario.btnEnviar.value = "Registrar";
      }, 3000);
      return false;
    }

    miformulario.btnEnviar.addEventListener("click", function() {

      var empty = miformulario.find("input, select, textarea").filter(function() {
        return this.value === "";
      });

      if (empty.length <= 0) {
        return confirmEnviar();
      } else {
        return false;
      }
    }, false);
  </script>

  </body>

</html>