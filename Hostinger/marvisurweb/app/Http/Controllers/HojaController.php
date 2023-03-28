<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hoja;
class HojaController extends Controller
{
    public function extraerHojaAll()
    {
            $hoja = Hoja::all();
            return $json= json_encode($hoja);       
    }
}
