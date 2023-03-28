<?php



namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use Illuminate\Support\Facades\Log;



class WebinarResource extends JsonResource

{

	private $structure = [];

	private function getWebinarDateTime($request){

		$date_text = '';

		if($request->has('type') && $request->type == 'today') $date_text = 'Hoy ';

		elseif($request->has('f80e4c') && count($request->all()) == 1 && $this->date == gmdate('Y-m-d 00:00:00',strtotime('-5 hours'))) $date_text = 'Hoy ';



		$date_text .= DAYS_OF_WEEK[$this->date->format('w')].' '.$this->date->format('d/m/y');

		$this->structure['date'] = $date_text;

		$this->structure['hour'] = $this->start_time ? $this->start_time->format('H:i A') : '';

	}

	/**

	 * Transform the resource into an array.

	 *

	 * @param  \Illuminate\Http\Request  $request

	 * @return array

	 */

	public function toArray($request) {

		$my_area = $this->type_area_data()->get();

		Log::info('whatchcuhaishappening: '.json_encode($my_area));

		if(sizeof($my_area) > 0){

			Log::info('inside if: '. json_encode($my_area[0]));

			$my_product = $my_area[0];

			$my_product['product_fullname'] = $my_product['tipo']['nombre'].' '.$my_product['nombreproducto'];

			$my_area = $my_area[0]['categoria_name']['nombre'];

		}



		$this->structure = [

			'webinar_id' => $this->webinar_id,

			'title' => $this->title,

			'imageUrl' => $this->thumbnail_url,

			'area' => $my_area,

			'non_formatted_date' => $this->date->format('Y-m-d'),

			'product_info' => (isset($my_product) ? $my_product:[]) ,

			'registration_url' => $this->registration_url,

			'recording_url' => $this->recording_url,

			'active_campaign_area_tag_id' => $this->active_campaign_area_tag_id,

			'active_campaign_product_tag_id' => $this->active_campaign_product_tag_id,

			'slug'=>$this->slug,

			// i think the list id is missing

		];

		

		//The following line is for the detail view

		if($request->has('f80e4c') && count($request->all()) == 1){

			$this->getWebinarDateTime($request,$this->structure);

			// we have to retrieve the teacher

			$this->structure['teacherInfo'] = $this->teacherInfo()->get();

			$this->structure['modality'] = $this->modality;

		}

		if($request->has('type') && $request->type != 'trending'){

			$this->getWebinarDateTime($request,$this->structure);

		}

		return $this->structure;

	}

}


