<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Services\Interfaces;


interface IConvocatoriaServiceInterface
{
    function getAllConvocatoria();
    function postConvocatoria(array $convocatoria);
    function putConvocatoria(array $convocatoria, int $id);
    function delConvocatoria(int $id);

}

