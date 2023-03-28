<?php

namespace App\Http\Controllers;

use App\Services\Implementation\TableroTiempoServiceImpl;
use App\Validator\AnnouncementValidator;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class TableroTiempoController extends Controller
{
    /**
     *
     * @var TableroTiempoServiceImpl
     */
    private $tableroTiempoService;
    /*
     * @var Request
     */
    private  $request;
    /*
     * @var ReclamacionesValidator
     */
    private $validator;

    public function __construct(TableroTiempoServiceImpl $tablerTiempoService, Request $request, AnnouncementValidator $validator){
        $this->tableroTiempoService = $tablerTiempoService;
        $this->request = $request;
        $this->validator=$validator;
    }
    function getListTablero(){
        return response($this->tableroTiempoService->getTableroTiempo());
    }
    function createTableroTiempo(){
        try{
		$this->tableroTiempoService->postTableroTiempo($this->request->all());
		    return new JsonResponse(['message' => trans('accept')],200);
	    }catch(Exception $e){
		    return new JsonResponse(['message'=>trans('Ocurrio un problema')],500);
	    }
    }
    function deleteStudent(int $id){
        $this->tableroTiempoService->delStudent($id);
        return response("",204);
    }
    function updateTableroTiempo($id){
        try{
            $this->tableroTiempoService->putTableroTiempo($this->request->all(), $id);
             return new JsonResponse(['message' => trans('accept')],200);
        }catch(Exception $e){
            return new JsonResponse(['message'=>trans('Ocurrio un problema')],500);
        }
    }
    function getinfoTablerByOrigen(){
        try{
            $data= $this->tableroTiempoService->searchOne($this->request->all());
            return new JsonResponse(['message' => trans('accept'),"response" => $data],200);
        }
        catch (Exception $e){
            return new JsonResponse(['message'=>trans('error'),"response"=>$e],500);
        }

    }
    function getUsers(){
        $response = response("",202);
        return $response;
    }
    function getOrigenesAgrupados(){
        try{
            $data= $this->tableroTiempoService->getOrigenGroupBy();
            return new JsonResponse(['message' => trans('accept'),"response" => $data],200);
        }
        catch (Exception $e){
            return new JsonResponse(['message'=>trans('error'),"response"=>$e],500);
        }
    }

    function getDestinosAgrupados(){
        try{
            $data= $this->tableroTiempoService->getDestinoGroupBy();
            return new JsonResponse(['message' => trans('accept'),"response" => $data],200);
        }
        catch (Exception $e){
            return new JsonResponse(['message'=>trans('error'),"response"=>$e],500);
        }
    }
    function eliminarTableroDeRuta(){
        try{
            $this->tableroTiempoService->eliminarTableroTiempo($this->request->id);
            return new JsonResponse(['message' => trans('accept')],200);
        }
        catch (Exception $e){
            return new JsonResponse(['message'=>trans('error'),"response"=>$e],500);
        }
    }

}
