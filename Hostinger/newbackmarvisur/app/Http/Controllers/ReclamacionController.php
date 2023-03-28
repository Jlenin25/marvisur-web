<?php

namespace App\Http\Controllers;

use App\Services\Implementation\ReclamacionServiceImpl;
use App\Validator\AnnouncementValidator;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReclamacionController extends Controller
{
    /**
     *
     * @var ReclamacionServiceImpl
     */
    private $claimService;
    /*
     * @var Request
     */
    private  $request;
    /*
     * @var convocatoria-validator
     */
    private $validator;

    public function __construct(ReclamacionServiceImpl $claimService, Request $request, AnnouncementValidator $validator){
        $this->claimService = $claimService;
        $this->request = $request;
        $this->validator=$validator;
    }

    function getClaim($code){
        return response($this->claimService->getClaim($code));

    }
    function createConvocatoria(){
        try{
            $this->claimService->postConvocatoria($this->request->all());
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
