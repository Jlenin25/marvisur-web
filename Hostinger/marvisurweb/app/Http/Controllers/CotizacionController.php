<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cotizacion;
class CotizacionController extends Controller
{
    public function extraerCotizacionAll()
    {
            $cotizacion = Cotizacion::all();
            return $json= json_encode($cotizacion);       
    }
}
