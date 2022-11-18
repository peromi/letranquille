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
        Schema::table('profiles', function (Blueprint $table) {
            $table->string('education')->nullable();
            $table->string('have_children')->nullable();
            $table->string('love_quote')->nullable();
            $table->string('member_quote')->nullable();
            $table->string('seeking_quote')->nullable();
            $table->string('gender')->nullable();
            $table->string('dating_for')->nullable();
            $table->string('live_in')->nullable();
            $table->string('relocate')->nullable();
            $table->string('hair_color')->nullable();
            $table->string('eye_color')->nullable();
            $table->string('weight')->nullable();
            $table->string('ethnicity')->nullable();
            $table->string('body_art')->nullable();
            $table->string('appearance')->nullable();
            $table->string('marital_status')->nullable();
            $table->string('number_of_children')->nullable();
            $table->string('oldest_child')->nullable();
            $table->string('youngest_child')->nullable();
            $table->string('want_more_children')->nullable();
            $table->string('have_pets')->nullable();
            $table->string('occupation')->nullable();
            $table->string('employment_status')->nullable();
            $table->string('annual_income')->nullable();
            $table->string('living_situation')->nullable();
            $table->string('nationality')->nullable();
            $table->string('languages_spoken')->nullable();
            $table->string('english_ability')->nullable();
            $table->string('french_ability')->nullable();
            $table->string('religious_values')->nullable();
            $table->string('polygamy')->nullable();
            $table->string('star_sign')->nullable();
            $table->string('favorite_movie')->nullable();
            $table->string('favorite_music')->nullable();
            $table->string('dress_style')->nullable();
            $table->string('humor')->nullable();
            $table->string('religion')->nullable();
            $table->string('hobbies_interest')->nullable();
            $table->string('personality')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('profiles', function (Blueprint $table) {
            //
        });
    }
};
