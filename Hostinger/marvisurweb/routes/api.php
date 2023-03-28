<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware'=>'cors'], function(){
Route::get('/obtenerdepartamentos','DepartamentoController@extraerDepartamentoAll');
Route::get('/obtenerconvocatorias','ConvocatoriaController@extraerTodos');
Route::get('/obtenerconvocatoriaid/{id}','ConvocatoriaController@buscarPorId');
Route::get('/sucursalesdepartamento','SucursalController@extraerSucursalDepartamento');
Route::get('/sucursalesciudad','SucursalController@extraerSucursalCiudad');
Route::get('/sucursalesTodas','SucursalController@extraerSucursal');
Route::get('/obtenerCotizaciones','CotizaUserController@extraerCotizaUserAll');
Route::get('/obtenersucursalespordepa/{nombre}','SucursalController@extraerSucursalesPorDepartamento');
Route::get('/obtenersucursalesporciudad/{nombre}','SucursalController@extraerSucursalesPorCiudad');
Route::get('/obtenersucursalesporid/{id}','SucursalController@extraerSucursalesPorDepartamentoID');
Route::get('/obtenerdepartamentoporid/{id}','DepartamentoController@extraerDepartamentoID');
Route::post('/savesucursales',['uses' =>'SucursalesController@saveSucursales']);
Route::get('/obtenercvs','CvController@extraerCvAll');

Route::post('/savecv','CvController@saveCv');
Route::post('/savecotizauser',['uses' =>'CotizaUserController@saveCotizaUser']);
Route::post('/uploadcv','CvController@uploadcv');
Route::post('/uploadadjuntos','SolucionesController@uploadArchivoAdjunto');

Route::post('/obtenerdatosdeguia','RastreoController@consultaguia');
Route::get('/extraertodouser','EmpleoUserController@extraerUserControllerAll');
Route::post('/savee','SucursalesController@savee');
Route::post('/savepedidosolucion',['uses' =>'SolucionesController@savePedidoSolucion']);
Route::post('/savesugerencias',['uses' =>'SugerenciasController@saveSugerencia']);
Route::post('/uploadimagen','CotizaUserController@uploadImagen');
Route::get('/extraerSoluciones','SolucionesController@extraerSoluciones');

Route::get('/obtenerorigenesdiferentes','SucursalController@extraerOrigenSucursalDiferentes');

Route::get('/obtenerdestinosdiferentes','SucursalController@extraerDestinoSucursalDiferentes');
Route::post('/buscartarifario','SucursalController@buscarTarifarioCiudades');
Route::get('/obtenercantidadguias','RastreoController@consultarCantidadGuias');
});