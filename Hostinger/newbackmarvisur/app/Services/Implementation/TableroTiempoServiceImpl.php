<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Services\Implementation;
use App\Models\TableroTiempo;
use App\Services\Interfaces;

use App\Services\Interfaces\ITableroTiempoServiceInterface;
use Illuminate\Support\Facades\DB;

class TableroTiempoServiceImpl implements Interfaces\ITableroTiempoServiceInterface {
    private $model;
    function  __construct(){
        $this->model = new TableroTiempo();
    }


    function getTableroTiempo()
    {
        return $this->model->where('estado','1')->get();

    }

    function getStudentById(int $id)
    {
        return $this->model->where('id',$id)->get();
    }

    function postTableroTiempo(array $announcement)
    {
        $this->model->create($announcement);
    }

    function putTableroTiempo(array $announcement, int $id)
    {
        $this->model->where('id',$id)
            ->first()
            ->fill($announcement)
            ->save();
    }

    function delTableroTiempo(int $id)
    {
        $announcement=$this->model->where('id',$id)
            ->first();
        if($announcement != null){
            $announcement->delete();
        }

    }

    function restoreTableroTiempo(int $id)
    {
        // TODO: Implement restoreAnnouncement() method.
    }

    function searchOne(array $tablerotiempo)
    {
        $origen=  $tablerotiempo['origen'];
        $destino = $tablerotiempo['destino'];
        return $this->model->where('origen',$origen)->where('destino',$destino)->where('estado',1)->orderBy('tiempo','desc')->first();
    }

    function getOrigenGroupBy()
    {
        return $this->model->selectRaw('origen')->groupBy('origen')->get();
    }
    function getDestinoGroupBy()
    {
        return $this->model->selectRaw('destino')->groupBy('destino')->get();
    }

    function eliminarTableroTiempo(int $id)
    {
        return $this->model->where('id',$id)->update(array('estado'=>'0'));
    }
}

