<?php

require('fpdf/fpdf.php');
require('conexion.php');

$dato1 = $_GET['numero'];

//$con=mysqli_connect("localhost","marvisur_problem","/Adminti1801/","marvisur_problem");
$resultado = mysqli_query($con,"SELECT * FROM hojas where idreclamo = $dato1");


if (!$resultado) {
    echo 'No se pudo ejecutar la consulta: ' . mysqli_error($con);
    exit;
}
$v1 = mysqli_fetch_row($resultado);
//$numero = mysqli_query($con, "Select count(*) from hojas where sucu='$v1[3]'");
//$v2 = mysqli_fetch_row($numero);

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', '', 10);
$pdf->Image('loguin.gif' , 10 ,8, 45 , 13,'GIF');
$pdf->Cell(45, 10, '', 0);
$pdf->Cell(140, 17, 'Arequipa Expreso Marvisur EIRL', 0);
$pdf->Ln(5);
$pdf->Cell(145, 12, '__________________________________________________________________________________________', 0);
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(140, 10, 'RUC : 20498189637', 0);
$pdf->Ln(15);
$pdf->SetFont('Courier', '', 11);
$pdf->Cell(70, 8, '', 0);
$pdf->Cell(10, 8, 'HOJA DE RECLAMO ', 0);

$pdf->Ln(10);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Num. Reclamo     : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[0], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Fecha            : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[2], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Sucursal         : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[3], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Direccion        : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, utf8_decode($v1[4]), 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Nombre/R. Social : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[5], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Direccion        : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, utf8_decode($v1[6]), 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'DNI/RUC          : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[7], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Telefono         : ', 0); 
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[8], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Email            : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[9], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Apoderado        : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[10], 0);

//$pdf->Ln(6);
//$pdf->SetFont('Courier', '', 9);
//$pdf->Cell(36, 5, 'Tipo             : ', 0);
//$pdf->SetFont('Arial', '', 9);
//$pdf->Cell(144, 5, $v1[11], 0);

$pdf->Ln(8);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(180, 5, 'Comentario       :', 100);
$pdf->Ln(8);
$pdf->SetFont('Arial', '', 9);
$pdf->MultiCell(180, 5, ''.utf8_decode($v1[12]).'', 100);

$pdf->Ln(30);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Numero de Guia  :', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[13], 0);

$pdf->Ln(10);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Tipo            :', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[14], 0);

$pdf->Ln(8);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(180, 5, 'Detalle Reclamo :', 100);
$pdf->Ln(8);
$pdf->SetFont('Arial', '', 9);
$pdf->MultiCell(180, 5,''.utf8_decode($v1[15]).'',0, 100);

$pdf->Ln(35);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(180, 5, 'Acciones Adoptadas por el proveedor:', 100);
$pdf->Ln(8);
$pdf->SetFont('Arial', '', 9);
$pdf->MultiCell(180, 5,''.$v1[16].'', 100);
$pdf->Ln(35);

$pdf->SetFont('Courier','',15);
$pdf->SetXY(10,260);
$pdf->Cell(40,2,"________________________________________________________",0);

$pdf->SetFont('Courier','',10);
$pdf->SetXY(10,268);
$pdf->Cell(100,2,"AREQUIPA: GARCI CARBAJAL 511 TELF. 054-206733,054-233225,054-232479",0);
$pdf->SetFont('Courier','',10);
$pdf->SetXY(10,272);
$pdf->Cell(100,2,"LIMA: JIRON FCO. LUNA PIZARRO 499 - LA VICTORIA TELF. 014235537 - RPC: 997530760",0);

mysqli_close($con); 
$pdf->Output();

?>