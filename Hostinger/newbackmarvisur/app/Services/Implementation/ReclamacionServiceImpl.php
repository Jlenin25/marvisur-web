<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Services\Implementation;
use App\Models\Hojas;
use App\Services\Interfaces;

use Illuminate\Support\Facades\DB;

class ReclamacionServiceImpl implements Interfaces\IReclamacionesServiceInterface {
    private $model;
    function  __construct(){
        $this->model = new Hojas();
    }
    function getClaim(int $id)
    {
        return $this->model->where('idreclamo',$id)->get();
    }

    function postClaim(array $claim)
    {
        $this->model->create($claim);
    }

    function putClaim(array $claim, int $code)
    {
       return $this->model->where('idreclamo',$code)
            ->first()
            ->fill($claim)
            ->save();
    }

    function delClaim(int $id)
    {
        return $this->model->where('code',$id)->get();
    }
}

