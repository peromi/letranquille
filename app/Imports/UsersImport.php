<?php

namespace App\Imports;

use App\Models\Avatar;
use App\Models\Gallery;
use App\Models\Hobby;
use App\Models\Location;
use App\Models\PreferenceAge;
use App\Models\PreferenceBodytype;
use App\Models\PreferenceDesiredRelationship;
use App\Models\PreferenceDrink;
use App\Models\PreferenceFood;
use App\Models\PreferenceReligion;
use App\Models\PreferenceSmoke;
use App\Models\Profession;
use App\Models\Profile;
use App\Models\Religion;
use App\Models\SexualOrientation;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class UsersImport implements ToModel,WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {




        $user = new User();
           $user->email = $row['email'];
           $user->password = Hash::make("22222222");
           $user->save();


           $food = ['vegetarian', 'vegan', 'non vegetarian'];
           $drink = ['drinker', 'non drinker', 'occasional drinker'];
           $smoke = ['smoker', 'non smoker', 'occasional smoker'];
           $relationship = ['long term', 'short term', 'hookups', 'new friends'];
           $food_rand = rand(0,2);
           $drink_rand = rand(0,2);
           $smoke_rand = rand(0,2);
           $relationship_rand = rand(0,3);


        //    save profile
            $profile = new Profile();
           $profile->user_id = $user->id;

           $profile->iam =   strtolower($row['gender']);
           if( $row['gender'] == 'Female' ){
            $profile->lookingfor = "male";
        }else{
            $profile->lookingfor = "female";
        }

           $profile->name = $row['name'];


           $profile->birthday = $row['birthday'];

           $profile->age = Carbon::now()->diffInYears(Carbon::parse($row['birthday']));



           if($row['gender'] == 'Female'){
            $profile->bodytype = "curvy";
           }else{
            $profile->bodytype = "muscular";
           }

           $profile->show_bodytype = "false";
           if($row['gender'] == 'Female'){
            $profile->height = 6;
           }else{
            $profile->height = 7;
           }

           $profile->show_height = "false";

           $profile->life_style_food  = $food[$food_rand];
           $profile->life_style_smoke  = $smoke[$smoke_rand];
           $profile->life_style_drink  = $drink[$drink_rand];
           $profile->life_style_relationship  = $relationship[$relationship_rand];

           $profile->save();




        //    Religion
        $religion = new Religion();
        $religion->user_id = $user->id;
        $religion->religion_name = "christian";
        $religion->save();


        // profession
        $profession = new Profession();
        $profession->user_id = $user->id;
        $profession->job =  "artisan";


        $profession->save();

        $sex = ['straight'];
        // SexualOrientation
        $sexualOrientation = new SexualOrientation();
        $sexualOrientation->user_id = $user->id;
        $sexualOrientation->sex_type = "straight";
        $sexualOrientation->show = "false";

        $sexualOrientation->save();

        // hobbies and interest

        $hobbies = ['cooking', 'netflix', 'gym', 'football', 'music'];


        for($i = 0; $i < 5; $i++) {
            $hobby = new Hobby();
            $hobby->user_id = $user->id;
            $hobby->hobby = $hobbies[$i];
            $hobby->save();
        }


        // avatar
        $avatar = new Avatar();

        $avatar->user_id = $user->id;
        $avatar->first_cover = $row['id']."_1.jpg";
        $avatar->second_cover = $row['id']."_2.jpg";

        $avatar->save();

        // Gallery

        for($i = 1; $i <= 3; $i++){
            $gallery = new Gallery();
            $gallery->user_id = $user->id;
            $gallery->cover = $row['id']."_".$i.".jpg";

            $gallery->save();
        }






        $location = new Location();
        $location->user_id = $user->id;


          $location->country = $row['country'];

          if(trim($row['state']) == null){
            $location->state = "any";
          }else{
            $location->state = $row['state'];
          }


            if(trim($row['city']) == null){
                $location->city = "any";
            }else{
                $location->city = trim($row['city']);
            }

            $location->latitude = 0.000001;
            $location->longitude = 0.000001;
            $location->currency = "USD";
            $location->currency_symbol = "$";
            $location->save();









        // age pref

        $agepick = rand(18,40);
        $agepickmax = rand(41,75);
        $ran1 = rand(0, 5);
        $ran2 = rand(0, 7);

        $age_pref = new PreferenceAge();
        $age_pref->user_id = $user->id;
        $age_pref->age_min = $agepick ;
        $age_pref->age_max = $agepickmax;

        $age_pref->save();


        $religionPref = new PreferenceReligion();
        $religionPref->user_id = $user->id;
        $religionPref->religion_type = "any";
        $religionPref->save();


        $pref_drink = new PreferenceDrink();
        $pref_drink->user_id = $user->id;
        $pref_drink->drink_type = "doesn't matter";
        $pref_drink->save();


        $pref_food = new PreferenceFood();
        $pref_food->user_id = $user->id;
        $pref_food->food_type = "non vegetarian";
        $pref_food->save();


        $pref_smoke = new PreferenceSmoke();
        $pref_smoke->user_id = $user->id;
        $pref_smoke->smoke_type = "doesn't matter";
        $pref_smoke->save();

        $pref_body = new PreferenceBodytype();
        $pref_body->user_id = $user->id;
        $pref_body->body_type = "doesn't matter";
        $pref_body->save();

        $pref_desired_relationship = new PreferenceDesiredRelationship();
        $pref_desired_relationship->user_id = $user->id;
        $pref_desired_relationship->relationship_type = "long term";
        $pref_desired_relationship->save();



        echo $user->id;

        return $user;
    }



}
