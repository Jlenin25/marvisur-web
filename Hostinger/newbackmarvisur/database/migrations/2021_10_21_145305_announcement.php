<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Announcement extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('student', function (Blueprint $table){
            $table->engine ='InnoDB';
            $table->bigIncrements('id')->unsigned();
            $table->string('name',255);
            $table->string('lastname',255);
            $table->string('dni',255);
            $table->string('email',50);
            $table->string('grade',10);
            $table->string('state',1);
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('attendance', function (Blueprint $table){
            $table->engine ='InnoDB';
            $table->bigIncrements('id')->unsigned();
            $table->dateTime('date');
            $table->unsignedBigInteger('id_student')->nullable();
            $table->string('state',1);
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('id_student')->references('id')->on('student');

        });
        Schema::create('users', function (Blueprint $table){
            $table->engine ='InnoDB';
            $table->bigIncrements('id')->unsigned();
            $table->string('firstname',100);
            $table->string('lastname',100);


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
