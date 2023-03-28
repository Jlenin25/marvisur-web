<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Services\Interfaces;


use App\Models\Attendance;

interface IAttendanceServiceInterface
{
    function getAttendance(array $values);
    /**
     *
     * @param int $id
     * @return Attendance
     */
    function getAttendanceById(int $id);
    /**
     *
     * @param array $attendance
     * @return void
     */
    function postAttendace(array $attendance);
    function putAttendace(array $attendance, int $id);
    function delAttendace(int $id);


    function restoreAttendace(int $id);
//   function getMegamenu();

}

