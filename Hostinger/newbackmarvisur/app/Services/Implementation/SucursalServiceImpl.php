<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Services\Implementation;
use App\Models\Convocatoria;
use App\Models\Sucursal;
use App\Services\Interfaces;

use Illuminate\Support\Facades\DB;

class SucursalServiceImpl implements Interfaces\ISucursalServiceInterface {
    private $model;
    function  __construct(){
        $this->model = new Sucursal();
    }

    function getAllDepartamentos()
    {
        return $this->model->selectRaw('departamento')->groupBy('departamento')->get();
    }
}

