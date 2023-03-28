<?php

namespace App\Http\Controllers;

use App\Services\Implementation\ConvocatoriaServiceImpl;
use App\Validator\AnnouncementValidator;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ConvocatoriaController extends Controller
{
    /**
     *
     * @var ConvocatoriaServiceImpl
     */
    private $convocatoriaService;
    /*
     * @var Request
     */
    private  $request;
    /*
     * @var convocatoria-validator
     */
    private $validator;

    public function __construct(ConvocatoriaServiceImpl $convocatoriaService, Request $request, AnnouncementValidator $validator){
        $this->convocatoriaService = $convocatoriaService;
        $this->request = $request;
        $this->validator=$validator;
    }

    function getListConvocatorias(){
        return response($this->convocatoriaService->getAllConvocatoria());

    }
    function createConvocatoria(){
        try{
            $this->convocatoriaService->postConvocatoria($this->request->all());
            return new JsonResponse(['message' => trans('accept')],200);
        }catch(Exception $e){
            return new JsonResponse(['message'=>trans('Ocurrio un problema'),'error'=>$e],500);
        }
    }
    function updateConvocatoria($code){
        try{
            $this->convocatoriaService->putConvocatoria($this->request->all(), $code);
            return new JsonResponse(['message' => trans('accept')],200);
        }catch(Exception $e){
            return new JsonResponse(['message'=>trans('Ocurrio un problema'),'error'=>$e],500);
        }
    }
    function eliminarConvocatoria(){
        try{
            $this->convocatoriaService->delConvocatoria($this->request->id);
            return new JsonResponse(['message' => trans('accept')],200);
        }
        catch (Exception $e){
            return new JsonResponse(['message'=>trans('error'),"response"=>$e],500);
        }
    }
}
