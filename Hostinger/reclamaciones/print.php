<?php
require('fpdf/fpdf.php');
require('conexion.php');


$dato1 = $_GET['numero'];

class PDF extends FPDF
{
// Cabecera de p�gina
function Header()
{
	// Logo
	
	//pdflto de l�nea
	$pdf->Ln(0);
}

// Pie de p�gina
function Footer()
{
	/* Posici�n: a 1,5 cm del final
	$this->SetFont('Arial','',15);
$this->SetXY(10,260);
$this->Cell(0,2,"_______________________________________________________________",0,0);

$this->SetFont('Arial','',10);
$this->SetXY(10,268);
$this->Cell(0,2,"AREQUIPA: GARCI CARBAJAL 511 TELF. 054-206733,054-233225,054-232479",0,0,'C');
$this->SetFont('Arial','',10);
$this->SetXY(10,272);
$this->Cell(0,2,"LIMA: JIRON FCO. LUNA PIZARRO 499 - LA VICTORIA TELF. 014235537 - RPC: 997530760",0,0,'C');*/
}

}
//$dato1 = $_GET['numero'];
//$dato1 = 4143;
//$con=mysqli_connect("localhost","marvisur_problem","/Adminti1801/","marvisur_problem");
$resultado = mysqli_query($con,"SELECT idreclamo, rec_fecha, sucu, rec_sucursal,
rec_nombre, rec_direccion, rec_dni, rec_telefono, rec_email, rec_apoderado,
 rec_comentarios, rec_guia, rec_tipo1, rec_monto,  rec_detalle, rec_tipo, rec_adoptadas, rec_numero FROM hojas where idreclamo = $dato1");


if (!$resultado) {
    echo 'No se pudo ejecutar la consulta: ' . mysqli_error($con);
    exit;
}
$v1 = mysqli_fetch_row($resultado);

// Creaci�n del objeto de la clase heredada
$pdf = new FPDF();
//$pdf->AliasNbPages();
$pdf->AddPage();

$pdf->Image('logo_pb.png',10,8,45);
	//pdfial bold 15
	$pdf->SetFont('Arial','B',15);
	//pdfvernos a la derecha
	$pdf->Cell(80);
	//pdftulo
	$pdf->Cell(30,10,'Arequipa Expreso Marvisur',0,0,'C');
	$pdf->Ln(8);
	//pdff->Ln(5);
	$pdf->SetFont('Arial','',15);
	$pdf->Cell(30, 12, '________________________________________________________________', 0);
	$pdf->SetFont('Arial', '', 10);
	$pdf->Cell(0, 12, 'RUC : 20498189637', 0, true,'R');

/*
$pdf->SetFont('Times','',12);
for($i=1;$i<=40;$i++)
	$pdf->Cell(0,10,utf8_decode('Imprimiendo línea número'.$i),0,1);
*/
$pdf->Ln(4);
$pdf->SetFont('Arial', '', 11);
//$pdf->Cell(0, 8, '', 0);
$pdf->Cell(0, 0, 'HOJA DE RECLAMO', 0,0,'C');

$pdf->Ln(4);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, utf8_decode('Código Reclamo   : '), 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[17], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Num. Reclamo     : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[0], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Fecha            : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[1], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Sucursal         : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, utf8_decode($v1[2]), 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Suc. Direccion   : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, utf8_decode($v1[3]), 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Nombre/R. Social : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, utf8_decode($v1[4]), 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Direccion        : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, utf8_decode($v1[5]), 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'DNI/RUC          : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[6], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Telefono         : ', 0); 
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[7], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Email            : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[8], 0);
$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Apoderado        : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[9], 0);
/*
$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Tipo             : ', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[11], 0);
*/
$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(180, 5, 'Comentario       :', 100);
$pdf->Ln(6);
$pdf->SetFont('Arial', '', 9);
$pdf->MultiCell(180, 5, ''.utf8_decode($v1[10]).'', 100);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Numero de Guia  :', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[11], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Tipo            :', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[12], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(36, 5, 'Monto           :', 0);
$pdf->SetFont('Arial', '', 9);
$pdf->Cell(144, 5, $v1[13], 0);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(180, 5, 'Detalle Reclamo :', 100);
$pdf->Ln(6);
$pdf->SetFont('Arial', '', 9);
$pdf->MultiCell(180, 5,''.utf8_decode($v1[14]).'',0, 100);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(180, 5, 'Pedido          :', 100);
$pdf->Ln(6);
$pdf->SetFont('Arial', '', 9);
$pdf->MultiCell(180, 5,''.utf8_decode($v1[15]).'',0, 100);

$pdf->Ln(6);
$pdf->SetFont('Courier', '', 9);
$pdf->Cell(180, 5, 'Acciones Adoptadas por el proveedor:', 100);
$pdf->Ln(6);
$pdf->SetFont('Arial', '', 9);
$pdf->MultiCell(180, 5,''.utf8_decode($v1[16]).'', 100);
$pdf->Ln(6);

$pdf->SetFont('Arial','',15);
$pdf->SetXY(10,260);
$pdf->Cell(0,2,"_______________________________________________________________",0,0);
$pdf->SetFont('Arial','',10);
$pdf->SetXY(10,268);
$pdf->Cell(0,2,"AREQUIPA: GARCI CARBAJAL 511 TELF. 054-206733,054-233225,054-232479",0,0,'C');
$pdf->SetFont('Arial','',10);
$pdf->SetXY(10,272);
$pdf->Cell(0,2,"LIMA: JIRON FCO. LUNA PIZARRO 499 - LA VICTORIA TELF. 014235537 - RPC: 997530760",0,0,'C');

mysqli_close($con); 

$pdf->Output();
?>
