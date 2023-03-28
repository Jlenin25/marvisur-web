<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller as BaseController;


class Controller extends BaseController
{
    protected $sort = 'created_at';
    protected $sortDirection = 'desc';
    protected $limit = 10;
    protected $page = 0;
    protected $defaultSort = 'id';
		protected $ignore_id = null;
    protected $permisibleOrders = [
        'created_at',
        'popularity',
				'date', // for webinars
				'attendees_qty'	// for webinars
    ];

    public function getPaginationParameters(Request $request)
    {
        if($request->has('sort')) {
            $request->sort =  strtolower($request->sort);
            if(in_array($request->sort, $this->permisibleOrders) || $request->sort==$this->defaultSort)
                $this->sort= $request->sort;
        }

        if($request->has('sort_direction')){
            $request->sort_direction =  strtolower($request->sort_direction);
            if(in_array($request->sort_direction, ['asc','desc']))
                $this->sortDirection = $request->sort_direction;
        }

        if($request->has('limit'))
            $this->limit = $request->limit;

        if($request->has('page'))
            $this->page = $request->page;

				if($request->has('ignore_id'))
            $this->ignore_id = $request->ignore_id;
    }

}
