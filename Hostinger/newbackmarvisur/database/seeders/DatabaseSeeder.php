<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
			// $this->call('UsersTableSeeder');
			for ($i=20; $i <500 ; $i++) {
				DB::table('webinars')->insert([
					'title' => 'Webinar for testing UI, resources usage and shit like that Number #'.$i,
					'modality' => 'Online',
					'date' => '2021-'.rand(5,12).'-'.rand(1,30),
					'start_time' => rand(20,21).':00:00',
					'end_time' => '22:00:00',
					'product_id' => rand(796,923),
					'teacher_id' => rand(300109,300115),
					'thumbnail_url' => 'https://ingenium.edu.pe/wp-content/uploads/2021/04/LOGO-BLANCO-2021.png'
				]);
			}
    }
}
