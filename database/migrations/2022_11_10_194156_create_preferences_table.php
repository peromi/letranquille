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
        Schema::create('preferences', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('user_id');
            $table->string('education')->default('any');
            $table->string('have_children')->default('any');
            $table->string('age_min')->default('any');
            $table->string('age_max')->default('any');
            $table->string('live_in')->default('any');
            $table->string('relocate')->default('any');
            $table->string('hair_color')->default('any');
            $table->string('eye_color')->default('any');
            $table->string('weight')->default('any');
            $table->string('height')->default('any');
            $table->string('smoke')->default('any');
            $table->string('drink')->default('any');
            $table->string('ethnicity')->default('any');
            $table->string('body_style')->default('any');
            $table->string('body_art')->default('any');
            $table->string('appearance')->default('any');
            $table->string('marital_status')->default('any');
            $table->string('number_of_children')->default('any');
            $table->string('oldest_child')->default('any');
            $table->string('youngest_child')->default('any');
            $table->string('want_more_children')->default('any');
            $table->string('have_pets')->default('any');
            $table->string('occupation')->default('any');
            $table->string('employment_status')->default('any');
            $table->string('annual_income')->default('any');
            $table->string('living_situation')->default('any');
            $table->string('nationality')->default('any');
            $table->string('languages_spoken')->default('any');
            $table->string('english_ability')->default('any');
            $table->string('french_ability')->default('any');
            $table->string('religious_values')->default('any');
            $table->string('polygamy')->default('any');
            $table->string('star_sign')->default('any');

            $table->string('religion')->default('any');
            $table->timestamps();



        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('preferences');
    }
};
