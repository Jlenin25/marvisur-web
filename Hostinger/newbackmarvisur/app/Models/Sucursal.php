<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sucursal extends Model
{
    protected $table ='sucursal';
    public $timestamps = false;
    protected $fillable = [
        'id',
        'titulo',
        'ubicacion',
        'departamento',
    ];

}
