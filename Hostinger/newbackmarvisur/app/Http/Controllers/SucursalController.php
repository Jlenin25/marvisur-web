<?php

namespace App\Http\Controllers;

use App\Models\Sucursal;
use App\Services\Implementation\SucursalServiceImpl;
use Illuminate\Http\Request;

class SucursalController extends Controller
{
    /**
     *
     * @var sucursalServiceImpl
     */
    private $sucursalService;
    /*
     * @var Request
     */
    private  $request;


    public function __construct(SucursalServiceImpl $sucursalService, Request $request){
        $this->sucursalService = $sucursalService;
        $this->request = $request;
    }

    function getListDepartamentos(){
        return response($this->sucursalService->getAllDepartamentos());

    }
}
