<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Services\Implementation;
use App\Models\Convocatoria;
use App\Services\Interfaces;

use Illuminate\Support\Facades\DB;

class ConvocatoriaServiceImpl implements Interfaces\IConvocatoriaServiceInterface {
    private $model;
    function  __construct(){
        $this->model = new Convocatoria();
    }
    function getAllConvocatoria()
    {
        return $this->model->where('estado','1')->get();
    }

    function postConvocatoria(array $convocatoria)
    {
        $this->model->create($convocatoria);
    }

    function putConvocatoria(array $convocatoria, int $code)
    {
       return $this->model->where('code',$code)
            ->first()
            ->fill($convocatoria)
            ->save();
    }

    function delConvocatoria(int $id)
    {
        return $this->model->where('code',$id)->update(array('estado'=>'0'));
    }
}

