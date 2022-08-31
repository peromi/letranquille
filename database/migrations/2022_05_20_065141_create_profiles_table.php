<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('iam');
            $table->string('lookingfor');
            $table->string('name');
            $table->string('birthday');
            $table->string('bodytype');
            $table->string('show_bodytype');
            $table->integer('height');
            $table->string('show_height');

            $table->string('life_style_food')->nullable();
            $table->string('life_style_smoke')->nullable();
            $table->string('life_style_drink')->nullable();
            $table->string('life_style_relationship')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
};
