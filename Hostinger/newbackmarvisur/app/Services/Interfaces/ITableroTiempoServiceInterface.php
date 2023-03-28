<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Services\Interfaces;


interface ITableroTiempoServiceInterface
{
    function getTableroTiempo();
    /**
     *
     * @param int $id
     * @return Announcement
     */
    function getStudentById(int $id);
    /**
     *
     * @param array $announcement
     * @return void
     */
    function postTableroTiempo(array $announcement);
    function eliminarTableroTiempo(int $id);
    function putTableroTiempo(array $announcement, int $id);
    function delTableroTiempo(int $id);
    function searchOne(array $tablerotiempo);
    function getOrigenGroupBy();
    function getDestinoGroupBy();
    function restoreTableroTiempo(int $id);
//   function getMegamenu();

}

