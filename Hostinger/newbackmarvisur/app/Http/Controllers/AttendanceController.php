<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Services\Implementation\AttendanceServiceImpl;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;

class AttendanceController extends Controller
{
    /**
     *
     * @var AttendanceServiceImpl
     */
    private $attendanceService;
    /*
     * @var Request
     */
    private  $request;
    /*
     * @var ReclamacionesValidator
     */
    private $validator;

    public function __construct(AttendanceServiceImpl $announcementService, Request $request){
        $this->attendanceService = $announcementService;
        $this->request = $request;


    }
    function getListAttendance(){
//        $this->getPaginationParameters($request);
//        $query = $this->attendanceService->getAttendance($request);
//        $paginatedResult = new JsonResponse($query->paginate($this->limit));
//        $filteredProducts = array();
//        return $paginatedResult;
          return $this->attendanceService->getAttendance($this->request->all());
    }
    function createAttendance(){
        try{
           $this->attendanceService->postAttendace($this->request->all());

            return new JsonResponse(['message' => trans('accept')],200);

        }catch(Exception $e){
            return new JsonResponse(['message'=>trans('noAccept')],500);
        }

    }
    function deleteAttendance(int $id){
        $this->AttendanceService->delAttendace($id);
        return response("",204);
    }
    function updateAttendance($id){
        $response = response("",202);
        $this->AttendanceService->putAttendace($this->request->all(), $id);
        return $response;
    }
    function getByIdAttendance($id){
        return response($this->AttendanceService->getAttendanceById($id));
    }
}

