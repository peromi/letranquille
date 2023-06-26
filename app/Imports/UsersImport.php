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
use App\Models\Preferences;
use App\Models\PreferenceSmoke;
use App\Models\Profession;
use App\Models\Profile;
use App\Models\Religion;
use App\Models\SexualOrientation;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class UsersImport implements ToModel, WithHeadingRow
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
            $food_rand = rand(0, 2);
            $drink_rand = rand(0, 2);
            $smoke_rand = rand(0, 2);
            $relationship_rand = rand(0, 3);


            //    save profile
            $profile = new Profile();
            $profile->user_id = $user->id;

            $profile->iam =   strtolower($row['gender']);
            $profile->gender = strtolower($row['gender']);
            if ($row['gender'] == 'Female') {
                $profile->lookingfor = "male";
            } else {
                $profile->lookingfor = "female";
            }

            $profile->name = $row['name'];


            $profile->birthday = $row['birthday'];

            $profile->age = Carbon::now()->diffInYears(Carbon::parse($row['birthday']));



            if ($row['gender'] == 'Female') {
                $profile->bodytype = "curvy";
            } else {
                $profile->bodytype = "muscular";
            }

            $profile->show_bodytype = "false";
            if ($row['gender'] == 'Female') {
                $profile->height = "6' (165cm)";
            } else {
                $profile->height = "7' (205cm)";
            }

            $profile->show_height = "false";
 
            $profile->life_style_smoke  = $smoke[$smoke_rand];
            $profile->life_style_drink  = $drink[$drink_rand];
            $profile->life_style_relationship  = $relationship[$relationship_rand];

            $profile->first_photo = $row['id'] . "_1.jpg";
            $profile->second_photo = $row['id'] . "_2.jpg";

           




            //    Religion
            // $religion = new Religion();
            // $religion->user_id = $user->id;
            // $religion->religion_name = "christian";
            // $religion->save();


            // // profession
            // $profession = new Profession();
            // $profession->user_id = $user->id;
            // $profession->job =  "artisan";


            // $profession->save();

            // $sex = ['straight'];
            // // SexualOrientation
            // $sexualOrientation = new SexualOrientation();
            // $sexualOrientation->user_id = $user->id;
            // $sexualOrientation->sex_type = "straight";
            // $sexualOrientation->show = "false";

            // $sexualOrientation->save();

            // // hobbies and interest

            // $hobbies = ['cooking', 'netflix', 'gym', 'football', 'music'];


            // for ($i = 0; $i < 5; $i++) {
            //     $hobby = new Hobby();
            //     $hobby->user_id = $user->id;
            //     $hobby->hobby = $hobbies[$i];
            //     $hobby->save();
            // }


            // avatar
            // $avatar = new Avatar();

            // $avatar->user_id = $user->id;
           

            // $avatar->save();

            // Gallery

            for ($i = 1; $i <= 3; $i++) {
                $gallery = new Gallery();
                $gallery->user_id = $user->id;
                $gallery->cover = $row['id'] . "_" . $i . ".jpg";

                $gallery->save();
            }





 
            $country = $row['country'];

            if (trim($row['state']) == null) {
                $state = "any";
            } else {
                $state = $row['state'];
            }


            if (trim($row['city']) == null) {
                $city = "any";
            } else {
                $city = trim($row['city']);
            }

            $profile->live_in = $country.",".$state.",".$city;

            $profile->love_quote = "Love is the greatest";
            $profile->member_quote = "Love and respect";
            $profile->seeking_quote = "Romance and love life"; 
            $profile->dating_for = "Romance and Love";

            $profile->save();







            // age pref

            $agepick = rand(18, 40);
            $agepickmax = rand(41, 75);
            $ran1 = rand(0, 5);
            $ran2 = rand(0, 7);


            $preferences = new Preferences();
      
            $preferences->user_id = $user->id;
            $preferences->age_min = $agepick;
            $preferences->age_max = $agepickmax;


            if ($row['gender'] == 'Female') {
                $preferences->seekingfor = "male";
            } else {
                $preferences->seekingfor = "female";
            }
         

            
         

            $preferences->save();


            


         

            echo $user->id;

            return $user;
         
    }
}
