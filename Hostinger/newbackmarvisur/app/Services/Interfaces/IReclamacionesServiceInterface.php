<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Services\Interfaces;


interface IReclamacionesServiceInterface
{
    function getClaim(int $id);
    function postClaim(array $convocatoria);
    function putClaim(array $convocatoria, int $id);
    function delClaim(int $id);

}

