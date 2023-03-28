<?php

namespace App\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class AnnouncementValidator
{
    /*
     * @var Request
     */
    private $Request;

    public function __construct(Request $request)
    {
        $this->Request = $request;
    }
    public function validate(){
        return Validator::make($this->Request->all(), $this->rules(), $this->messages());
    }
    public function rules(){
        return[
            //  "razonsocial"=>"required",
            // "documento"=>"required",
            // "email"=>"required|email"

        ];

    }
    public function messages(){
        return[];

    }
}
