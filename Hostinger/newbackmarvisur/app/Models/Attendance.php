<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Lumen\Auth\Authorizable;
use App\Models\TableroTiempo;

class Attendance extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory, \Illuminate\Database\Eloquent\SoftDeletes;
    protected $table ='attendance';
    protected $fillable = [
        'date',
        'id_student',
        'state',
        'created_at',
        'updated_at'
    ];

    public function student(){

        return $this->belongsTo(TableroTiempo::class,'id_student','id');

    }
}
