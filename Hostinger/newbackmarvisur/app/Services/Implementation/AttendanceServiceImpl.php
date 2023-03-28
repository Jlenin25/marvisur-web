<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Services\Implementation;
use App\Models\Attendance;
use App\Models\TableroTiempo;
use App\Services\Interfaces;
use App\Services\Interfaces\ITableroTiempoServiceInterface;

class AttendanceServiceImpl implements Interfaces\IAttendanceServiceInterface {
    private $model;
    function  __construct(){
        $this->model = new Attendance();
    }


    function getAttendance(array $values)
    {
//        $query = $this->model->select

        return $this->model->with('student')->where('id_student',$values['id'])->get();
    }

    function getAttendanceById(int $id)
    {
        return $this->model->where('id',$id)->get();

    }

    function postAttendace(array $attendance)
    {
        $new_attendance= array();
        $now_timestamp = strtotime('-5 hours');
        $date_arg = gmdate('Y-m-d H:i:s',$now_timestamp);

        $query = TableroTiempo::select('id')->where('dni',$attendance['dni'])->get();

        $new_attendance['date']=$date_arg;
        $new_attendance['id_student']=$query[0]['id'];
        $new_attendance['state']=1;

        $this->model->create($new_attendance);
    }

    function putAttendace(array $attendance, int $id)
    {
        $this->model->where('id',$id)
            ->first()
            ->fill($attendance)
            ->save();
    }

    function delAttendace(int $id)
    {
        $announcement=$this->model->where('id',$id)
            ->first();
        if($announcement != null){
            $announcement->delete();
        }

    }

    function restoreAttendace(int $id)
    {
        // TODO: Implement restoreAnnouncement() method.
    }
}

