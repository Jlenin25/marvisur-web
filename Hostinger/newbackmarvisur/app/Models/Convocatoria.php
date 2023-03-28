<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Lumen\Auth\Authorizable;
class Convocatoria extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    protected $table ='convocatoria';
    public $timestamps = false;
    protected $primaryKey = 'code';
    protected $fillable = [
        'code',
        'cargo',
        'estudios',
        'conocimientos',
        'funciones',
        'lugar',
        'tipo',
        'fechaexp',
        'sueldo',
        'vacantes',
        'estado'
    ];
}
