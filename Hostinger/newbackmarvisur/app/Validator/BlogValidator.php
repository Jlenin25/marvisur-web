<?php

namespace App\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class BlogValidator
{
    /*
     * @var Request
     */
    private $Request;

    public function __construct(Request $request, BlogValidator $validator)
    {
        $this->Request = $request;
        $this->validator=$validator;
    }
    public function validate(){
        return Validator::make($this->Request->all(), $this->rules(), $this->messages());
    }
    public function rules(){
        return[
            'title'=> 'required|max:200',
            'descriptions'=> 'required',
            'likes'=> 'required|max:0',
            'tags'=> 'required|max:300',
            'image_web'=> 'required|max:200',
            'interactions'=> 'required|max:0',
            'product_id'=> 'required'
        ];

    }
    public function messages(){
        return[];

    }
}
