<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Lumen\Auth\Authorizable;
class Hojas extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    protected $table ='hojas';
    public $timestamps = false;
    protected $primaryKey = 'idreclamo';
    protected $fillable = [
        'idreclamo',
        'rec_numero',
        'rec_fecha',
        'sucu',
        'rec_sucursal',
        'rec_nombre',
        'rec_direccion',
        'rec_dni',
        'rec_telefono',
        'rec_email',
        'rec_apoderado',
        'rec_tipo',
        'rec_comentarios',
        'rec_guia',
        'rec_tipo1',
        'rec_detalle',
        'rec_adoptadas',
        'rec_monto'
    ];
}
