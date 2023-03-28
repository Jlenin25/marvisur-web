<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class TeacherResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array
	 */
	public function toArray($request)
	{
		$structure = [
			'webinar_id' => $this->webinar_id,
			'title' => $this->title,
			'imageUrl' => $this->thumbnail_url,
			'area' => $my_area,
			'registration_url' => $this->registration_url,
			'recording_url' => $this->recording_url
		];
		return $structure;
	}
}
