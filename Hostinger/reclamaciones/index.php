<?php 
  include 'header.php';
?>
<!DOCTYPE html>
<html lang="en">
  
  <body>
<div class="container div__reclamo">
  
    <div id="loginbox" style="margin-top:50px;" class="mainbox">
         <div class="panel panel-info" >
                    <div class="panel-heading">
                        <center><div class="panel-title">
                          <h4 class="h4__subtitles h4__index">RECLAMO</h4></div></center>     
                    </div>     

                    <div style="padding-top:10px" class="panel-body" >

                        <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
                        <center><img class ="book" src="reclamaciones.svg" ></center>

                                  
            <form accept-charset="UTF-8" class="form-horizontal" action="hoja.php" method="post">
            <br>
            <fieldset>
                
              <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-ok"></i></span>
               <tr>
                            
                            <td>
                              
                                                     
                               <?php
                               include 'conexion.php';
                                   $sucursales_query = "SELECT titulo, direccion FROM sucursal ORDER BY titulo ASC";
                                    $result=mysqli_query($con,$sucursales_query);                            

                                      if (mysqli_num_rows($result) > 0 ){
                                        echo "<div class='dropdown'>
                                        <div class='select'>
                                          <span class='span__list'>Seleccione sucursal donde ocurrió el incidente</span>
                                          
                                        </div> 
                                        <input class='form-control' type='hidden' name='sucursal' id='sucursal' value=0>                                     
                                        <ul class='dropdown-menu' '>";
                                        while($row=mysqli_fetch_array($result)){
                                          echo "<li  id='".$row['titulo']."'><strong>".$row['titulo'].'</strong> - '.$row['direccion']."</li>";                                          
                                        }
                                        echo "</ul> </div>";  
                                      }
                                        mysqli_close($con);    
                                    
                                ?>

                            </td>

                          </tr>
                          </div>
<!--
                          <div class="dropdown">
        <div class="select">
          <span>Select Gender</span>
          <i class="fa fa-chevron-left"></i>
        </div>
        <input type="hidden" name="gender">
        <ul class="dropdown-menu">
          <li id="male">Male</li>
          <li id="female">Female</li>
        </ul>
      </div>  -->


              <button class="btn btn-lg btn-danger btn-block btn__marvi"  type="submit" >CONTINUAR</button>

              <br>

              <div class="form-group">
                                    <div class="col-md-12 control">
                                        <div style="border-top: 2px solid #fff; padding-top:15px; font-size:85%" >
                                            
                                        <center><a class = "a__label" href="#">
                                            Arequipa Expreso Marvisur EIRL - RUC 20498189637
                                        </a></center>
                                        </div>
                                    </div>
                                </div>  

            </fieldset>

            <center>
            <div id="mensaje"></div>
            </center>
              </form>             
          </div>
      </div>
    </div>
  </div>
</div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) 
    <script src="js/jquery.min.js"></script>-->
    <!-- Include all compiled plugins (below), or include individual files as needed 
    <script src="js/bootstrap.min.js"></script>-->

    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="js/myjava.js"></script>
  </body>
</html>
