<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(["prefix" => "/v1"], function () use ($router)
{
    $router->group(["prefix" => "/tablerotiempo"], function () use ($router)
    {
        $router->get('getAlltablero', 'TableroTiempoController@getListTablero');
        $router->post("buscarTablero",'TableroTiempoController@getinfoTablerByOrigen');
        $router->post("eliminar",'TableroTiempoController@eliminarTableroDeRuta');
        $router->get("getorigenes",'TableroTiempoController@getOrigenesAgrupados');
        $router->get("getdestinos",'TableroTiempoController@getDestinosAgrupados');
        $router->post('createtablerotiempo', 'TableroTiempoController@createTableroTiempo');
        $router->delete('/delete/{id}', 'TableroTiempoController@deleteStudent');
        $router->put('/update/{id}', 'TableroTiempoController@updateTableroTiempo');
        $router->get("/find/{id}",'TableroTiempoController@getByIdStudent');
    });
    $router->group(["prefix" => "/convocatoria"], function () use ($router)
    {
        $router->get('getAllConvocatorias', 'ConvocatoriaController@getListConvocatorias');
        $router->post('createConvocatoria', 'ConvocatoriaController@createConvocatoria');
        $router->put('/updateConvocatoria/{code}', 'ConvocatoriaController@updateConvocatoria');
        $router->post('deleteConvocatoria', 'ConvocatoriaController@eliminarConvocatoria');

    });
    $router->group(["prefix" => "/sucursal"], function () use ($router)
    {
        $router->get('getAllDepartament', 'SucursalController@getListDepartamentos');
    });
    $router->group(["prefix" => "/reclamaciones"], function () use ($router)
    {
        $router->get('obtenerReclamo/{code}', 'ReclamacionController@getClaim');
        $router->post('registrarReclamo', 'ReclamacionController@postClaim');
    });
});
