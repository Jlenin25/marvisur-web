<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\EmpleoUser;

class EmpleoUserController extends Controller
{
    public function extraerUserControllerAll()
    {
            $empleo = EmpleoUser::all();
            return $json= json_encode($empleo);       
    }
}
