<?php

use App\Http\Controllers\ActionController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\AvatarController;
use App\Http\Controllers\BodyTypeController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\PreferencesController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HeightController;
use App\Http\Controllers\HobbyController;
use App\Http\Controllers\LikedController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\MembershipController;
use App\Http\Controllers\PreferenceAgeController;
use App\Http\Controllers\PreferenceBodytypeController;
use App\Http\Controllers\PreferenceCategoryController;
use App\Http\Controllers\PreferenceDesiredRelationshipController;
use App\Http\Controllers\PreferenceDrinkController;
use App\Http\Controllers\PreferenceFoodController;
use App\Http\Controllers\PreferenceReligionController;
use App\Http\Controllers\PreferenceSmokeController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileViewController;
use App\Http\Controllers\ReligionController;
use App\Http\Controllers\SexualOrientationController;
use App\Http\Controllers\VideoCallController;
use App\Http\Controllers\PaymentController;
use App\Models\Avatar;
use App\Models\BlockList;
use App\Models\BodyType;
use App\Models\Favorite;
use App\Models\Gallery;
use App\Models\Height;
use App\Models\Hobby;
use App\Models\Liked;
use App\Models\Location;
use App\Models\Membership;
use App\Models\LastMessage;
use App\Models\Message;
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
use App\Models\ProfileView;
use App\Models\Religion;
use App\Models\SexualOrientation;
use App\Models\User;
use App\Notifications\MessageNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Carbon;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->get('/dashboard', function () {

    $user = auth()->user();
    // Check if your profile is complete
    $profile = Profile::where('user_id', $user->id)->first();

    $religion = Religion::where('user_id', $user->id)->first();
    $profession = Profession::where('user_id', $user->id)->first();
    $sexual = SexualOrientation::where('user_id', $user->id)->first();
    $hobbies = Hobby::where('user_id', $user->id)->get();
    $avatar = Avatar::where('user_id', $user->id)->first();
    $gallery = Gallery::where('user_id', $user->id)->get();
    $location = Location::where('user_id', $user->id)->first();
    // if($profile == null){
    //     return response(['message' => "Profile not exist"], 201);
    // }else{
    //     return response(['message' => "Profile not upto date", 'user' => $user], 201);
    // }

});

Route::middleware('auth:sanctum')->group(function () {
    // Route::apiResource('/profile', ProfileController::class);

    Route::get('/user-profile', function () {

        $user = User::where('id', auth()->user()->id)->with('gallery')->first();
         
        
        $preferences = Preferences::where("user_id",$user->id)->first();
        $profile = Profile::where("user_id",$user->id)->first();

        return json_encode(['user'=>$user,  "profile"=>$profile, "preference" => $preferences]);
 
    });

    Route::get('/user-profile/{id}', function ($id) {
        $user = User::where('id',$id)->with('gallery')->first();

        $profile = Profile::where("user_id",$user->id)->first();
        $preferences = Preferences::where("user_id", $user->id)->first();

        $match_preference = Preferences::where("user_id", auth()->user()->id)->first();

        return json_encode(['user' => $user,'profile'=>$profile, 'preference' => $preferences, "match_preference" => $match_preference]);
    });

    Route::get('/profile/{id}', [ProfileController::class, "show"]);
    Route::put('/profile/{id}',[ProfileController::class, "update"]);
    Route::get('/profile', [ProfileController::class, "index"]);
    Route::post('/profile', [ProfileController::class, "store"]);

    Route::apiResource('/religion', ReligionController::class);
    Route::apiResource('/profession', ProfessionController::class);
    Route::apiResource('/sexual-orientation', SexualOrientationController::class);
    Route::apiResource('/user-hobby', HobbyController::class);
    Route::apiResource('/avatar', AvatarController::class);
    Route::apiResource('/gallery', GalleryController::class);
    Route::apiResource('/location', LocationController::class);


    // update avatar
    Route::post("/user-avatar-update", function (Request $request){
        $profile = Profile::where("user_id", auth()->user()->id)->first();
            
            //AVATAR PROFILE

            if($request->hasFile('avatar')){

                Storage::delete("public/avatar/".$profile->first_photo);

                $fileWithExt = $request->file('avatar')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('avatar')->storeAs('public/avatar/', $fileToSave);

                // AVATAR 2
                if($request->hasFile('avatar2')){
                    Storage::delete("public/avatar/".$profile->second_photo);
                    $fileWithExt2 = $request->file('avatar2')->getClientOriginalName();
                    $filename2 = pathinfo($fileWithExt2, PATHINFO_FILENAME);
                    $ext2 = pathinfo($fileWithExt2, PATHINFO_EXTENSION);
                    $fileToSave2 = md5($filename2.time()).'.'.$ext2;
                    $request->file('avatar2')->storeAs('public/avatar/', $fileToSave2);
    
                } 


               
                $profile->first_photo = $fileToSave;
                $profile->second_photo = $fileToSave2;
                 

                // $avatar->save();

            }

           
            $gallery = new Gallery();
            if($request->hasFile('gallery'))
            {
                $fileWithExt = $request->file('gallery')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery')->storeAs('public/gallery/', $fileToSave);

                $gallery->user_id = auth()->user()->id;
                $gallery->cover = $fileToSave;
                $gallery->save();
            }

            // Gallery 2
            $gallery2 = new Gallery();
            if($request->hasFile('gallery2'))
            {
                $fileWithExt = $request->file('gallery2')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery2')->storeAs('public/gallery/', $fileToSave);

                $gallery2->user_id = auth()->user()->id;
                $gallery2->cover =$fileToSave;
                $gallery2->save();
            }

            // Gallery 3
            $gallery3 = new Gallery();
            if($request->hasFile('gallery3'))
            {
                $fileWithExt = $request->file('gallery3')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename.time()).'.'.$ext;
                $request->file('gallery3')->storeAs('public/gallery/', $fileToSave);

                $gallery3->user_id = auth()->user()->id;
                $gallery3->cover = $fileToSave;
                $gallery3->save();
            }

            // // Gallery 4
            // $gallery4 = new Gallery();
            // if($request->hasFile('gallery4'))
            // {
            //     $fileWithExt = $request->file('gallery4')->getClientOriginalName();
            //     $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
            //     $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
            //     $fileToSave = md5($filename.time()).'.'.$ext;
            //     $request->file('gallery4')->storeAs('public/gallery/', $fileToSave);

            //     $gallery4->user_id = auth()->user()->id;
            //     $gallery4->cover =  $fileToSave;
            //     $gallery4->save();
            // }
            // // Gallery 5
            // $gallery5 = new Gallery();
            // if($request->hasFile('gallery5'))
            // {
            //     $fileWithExt = $request->file('gallery5')->getClientOriginalName();
            //     $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
            //     $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
            //     $fileToSave = md5($filename.time()).'.'.$ext;
            //     $request->file('gallery5')->storeAs('public/gallery/', $fileToSave);

            //     $gallery5->user_id = auth()->user()->id;
            //     $gallery5->cover = $fileToSave;
            //     $gallery5->save();
            // }
            // // Gallery 6
            // $gallery6 = new Gallery();
            // if($request->hasFile('gallery6'))
            // {
            //     $fileWithExt = $request->file('gallery6')->getClientOriginalName();
            //     $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
            //     $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
            //     $fileToSave = md5($filename.time()).'.'.$ext;
            //     $request->file('gallery6')->storeAs('public/gallery/', $fileToSave);

            //     $gallery6->user_id = auth()->user()->id;
            //     $gallery6->cover =  $fileToSave;
            //     $gallery6->save();
            // }



            // $profile = Profile::where("user_id", auth()->user()->id)->first();
        

        $profile->iam = $request->input("gender");
        $profile->lookingfor = $request->input("lookingfor");
        $profile->name = $request->input("name");
        $profile->birthday = $request->input("birthday");
        $profile->age = $request->input("age");
        $profile->bodytype = $request->input("bodytype");
        $profile->height = $request->input("height");
        $profile->life_style_smoke = $request->input("life_style_smoke");
        $profile->life_style_drink = $request->input("life_style_drink");
        $profile->education = $request->input("education");
        $profile->have_children = $request->input("have_children");
        $profile->love_quote = $request->input("love_quote");
        $profile->member_quote = $request->input("member_quote");
        $profile->seeking_quote = $request->input("seeking_quote");
        $profile->gender = $request->input("gender");
        $profile->dating_for = $request->input("dating_for");
        $profile->live_in = $request->input("live_in");
        $profile->relocate = $request->input("relocate");
        $profile->hair_color = $request->input("hair_color");
        $profile->eye_color = $request->input("eye_color");
        $profile->weight = $request->input("weight");
        $profile->ethnicity = $request->input("ethnicity");
        $profile->body_art = $request->input("body_art");
        $profile->appearance = $request->input("appearance");
        $profile->marital_status = $request->input("marital_status");
        $profile->number_of_children = $request->input("number_of_children");
        $profile->oldest_child = $request->input("oldest_child");
        $profile->youngest_child = $request->input("youngest_child");
        $profile->want_more_children = $request->input("want_more_children");
        $profile->have_pets = $request->input("have_pets");
        $profile->occupation = $request->input("occupation");
        $profile->employment_status = $request->input("employment_status");
        $profile->annual_income = $request->input("annual_income");
        $profile->living_situation = $request->input("living_situation");
        $profile->nationality = $request->input("nationality");
        $profile->languages_spoken = $request->input("languages_spoken");
        $profile->english_ability = $request->input("english_ability");
        $profile->french_ability = $request->input("french_ability");
        $profile->religious_values = $request->input("religious_values");
        $profile->polygamy = $request->input("polygamy");
        $profile->star_sign = $request->input("star_sign");
        $profile->favorite_movie = $request->input("favorite_movie");
        $profile->favorite_music = $request->input("favorite_music");
        $profile->dress_style = $request->input("dress_style");
        $profile->humor = $request->input("humor");
        $profile->religion = $request->input("religion");
        $profile->hobbies_interest = $request->input("hobbies_interest");
        $profile->personality = $request->input("personality");


            if($profile->save()){
                return json_encode(['message'=>'Profile Picture added.',"profile" => $profile]);
            }else{
                return json_encode(['message'=>'Something went wrong.']);
            }
    });
    // Send message notification
    Route::post('/message-notification', function (Request $request) {
        $user = User::find($request->input('id'));
        $data = [
            'name'  => $user->profile->name,
            'message' => $request->input('message'),
        ];

        Notification::send($user, new MessageNotification($data));
    });

    // delete gallery
    Route::delete('/gallery-delete/{id}', function ($id) {
        $gallery = Gallery::find($id);
        Storage::delete("public/gallery/" . $gallery->cover);
        if ($gallery->delete()) {
            return json_encode(['message' => "Image deleted successfully"], 201);
        }
    });

    Route::put('/sexual_orientation', function (Request $request) {
        $sexualOrientation = SexualOrientation::where('user_id', auth()->user()->id)->first();


        $sexualOrientation->sex_type = $request->input('type');


        $sexualOrientation->show = $request->input('show');




        if ($sexualOrientation->save()) {
            return json_encode(['message' => "Sexual Orientation updated"], 201);
        }
    });
    // Update Religion
    Route::put('/religion', function (Request $request) {
        $religion = Religion::where('user_id', auth()->user()->id)->first();

        $religion->relgion_name = $request->input('name');

        if ($religion->save()) {

            return json_encode(['message' => 'Religion updated successfully'], 200);
        }
    });

    // Delete Gallery

    // Update Avatar
    Route::post('/avatar-update', function (Request $request) {

        if (!auth()->user()->id) {
            return json_encode(['message' => "Token expired, Login to continue."], 401);
        } else {
            $avatar = Avatar::where('user_id', auth()->user()->id)->first();
            //AVATAR PROFILE



            if ($request->hasFile('cover')) {

                if ($avatar->cover !== null) {
                    Storage::delete("public/cover/" . $avatar->cover);
                }

                $fileWithExt = $request->file('cover')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename . time()) . '.' . $ext;
                $request->file('cover')->storeAs('public/cover/', $fileToSave);

                $avatar->cover = $fileToSave;
            }

            if ($request->hasFile('avatar1')) {
                Storage::delete("/public/avatar/" . $avatar->first_cover);
                $fileWithExt = $request->file('avatar1')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename . time()) . '.' . $ext;
                $request->file('avatar1')->storeAs('public/avatar/', $fileToSave);

                $avatar->first_cover = $fileToSave;
            }

            if ($request->hasFile('avatar2')) {
                Storage::delete("/public/avatar/" . $avatar->second_cover);
                $fileWithExt = $request->file('avatar2')->getClientOriginalName();
                $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
                $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
                $fileToSave = md5($filename . time()) . '.' . $ext;
                $request->file('avatar2')->storeAs('public/avatar/', $fileToSave);

                $avatar->second_cover = $fileToSave;
            }

            if ($request->input('bio') != null) {
                $avatar->bio = $request->input('bio');
            }

            if ($avatar->save()) {

                return json_encode(['message' =>  'Profile updated successfully', "avatar"=>$avatar], 201);
            }
        }
    });

    // Update for religion, professions, sexual_orientations, user hobby, avatar, gallery and location
    Route::put('/profession', function (Request $request) {
        $profession = Profession::where('user_id', auth()->user()->id)->first();

        if ($request->input('job') != null) {
            $profession->job = $request->input('job');
        }

        if ($request->input('description') != null) {
            $profession->description = $request->input('description');
        }


        if ($profession->save()) {
            return json_encode(['message' => 'Job updated successfully'], 200);
        }
    });
    Route::apiResource('/preference-age', PreferenceAgeController::class);
    Route::apiResource('/preference-bodytype', PreferenceBodytypeController::class);
    Route::apiResource('/preference-religion', PreferenceReligionController::class);
    Route::apiResource('/preference-food', PreferenceFoodController::class);
    Route::apiResource('/preference-smoke', PreferenceSmokeController::class);
    Route::apiResource('/preference-drink', PreferenceDrinkController::class);
    Route::apiResource('/preference-desired-relationship', PreferenceDesiredRelationshipController::class);
    Route::apiResource('/likes', LikedController::class);
    Route::apiResource('/favorite', FavoriteController::class);
    Route::apiResource('/profile-view', ProfileViewController::class);
    Route::apiResource('/membership', MembershipController::class);


    // BUY COINS
    Route::post("/buy-coins", function (Request $request) {
        $member = Membership::where('user_id', auth()->user()->id)->first();
        if ($member == null) {
            return json_encode(['message' => 'You are not legible to buy credit.']);
        } else {
            $member->credit = $member->credit + number_format($request->input('credit'));
            if ($member->save()) {
                return json_encode(['message' => 'Credit purchase was successful.']);
            }
        }
    });

    // Gift membership to a friend
    Route::post("/gift-membership", function (Request $request) {
        $check = Membership::where('user_id', $request->input('friendid'))->first();
        if ($check == null) {
            $membership = new Membership();
            $membership->user_id = $request->input('friendid');
            $membership->address = "nil";
            $membership->country = "nil";
            $membership->state = 'nil';
            $membership->city = 'nil';
            $membership->zip = 'nil';
            $membership->plan_type = $request->input('plan_type');
            $membership->duration = $request->input('duration');
            $membership->expiry = Carbon::now()->addDays($request->input('duration'));
            $membership->credit = 0;

            if ($membership->save()) {
                return json_encode(['message' => "Subcription successful."]);
            } else {
                return json_encode(['message' => 'Something went wrong']);
            }
        } else {


            if ($request->input('address') != null) {
                $check->address = $request->input('address');
            }

            if ($request->input('country') != null) {
                $check->country = $request->input('country');
            }

            if ($request->input('state') != null) {
                $check->state = $request->input('state');
            }

            if ($request->input('city') != null) {
                $check->city = $request->input('city');
            }

            if ($request->input('zip') != null) {
                $check->zip = $request->input('zip');
            }

            $check->plan_type = $request->input('plan_type');
            $check->duration = $request->input('duration');
            $check->expiry = Carbon::parse($check->expiry)->addDays($request->input('duration'));


            if ($check->save()) {
                return json_encode(['message' => "Subcription successful."]);
            } else {
                return json_encode(['message' => 'Something went wrong']);
            }
        }
    });


    Route::post("/view-profile", function (Request $request) {
        $check = ProfileView::where('user_id', auth()->user()->id)->where('profile_id', $request->input('profile'))->first();
        if ($check == null) {
            $profile = new ProfileView();
            $profile->user_id = auth()->user()->id;
            $profile->profile_id = $request->input('profile');

            $user = User::find($request->input('profile'));
            $data = [
                'name'  => auth()->user()->profile->name,
                'message' => auth()->user()->profile->name . " viewed your profile.",
            ];

            Notification::send($user, new MessageNotification($data));

            if ($profile->save()) {
                return json_encode(['message' => "Profile Viewed."], 201);
            }
        }
    });
    // ================== Fetch Gallery ==========================================//
    Route::get('/user-gallery/{id}', function ($id) {
        $gallery = Gallery::where('user_id', $id)->get();
        return json_encode(['gallery' => $gallery], 201);
    });

    Route::get('/matches', function () {
        $user = User::find(auth()->user()->id)->with('gallery')->with('likes')->first();

        $profile = Profile::where("user_id", $user->id)->first();
        $preference = Preferences::where("user_id", $user->id)->first();
        $matches = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $preference->seekingfor)->where('profiles.favorite_movie', "LIKE", "%".$profile->favorite_movie."%"  )->orWhere('profiles.favorite_music', "LIKE", "%".$profile->favorite_music."%"  )->OrWhere('profiles.hobbies_interest', "LIKE", "%".$profile->hobbies_interest."%"  )->with('gallery')->with('preferences')->with('likes')->inRandomOrder()->paginate(250);
        
        // $matches = Profile::where('iam', $user->profile->lookingfor)->where('bodytype', $user->preferenceBodytype->type)->whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->latest()->paginate(50);
        $subscription = Membership::where("user_id", $user->id)->first();

        return json_encode(['matches' => $matches, 'user' => $user, 'subscription' => $subscription], 201);
    });

    Route::get("/mutual-matches", function () {
        $user = User::find(auth()->user()->id)->with('gallery')->with('likes')->first();
        $profile = Profile::where("user_id", $user->id)->first();
        $preference = Preferences::where("user_id", $user->id)->first();
        $matches = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $preference->seekingfor)->orWhere('profiles.favorite_movie', "LIKE", "%".$profile->favorite_movie."%"  )->orWhere('profiles.favorite_music', "LIKE", "%".$profile->favorite_music."%"  )->OrWhere('profiles.hobbies_interest', "LIKE", "%".$profile->hobbies_interest."%"  )->with('gallery')->with('preferences')->with('likes')->inRandomOrder()->paginate(250);
        // $matches = Profile::where('iam', $user->profile->lookingfor)->where('bodytype', $user->preferenceBodytype->type)->whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->latest()->paginate(50);
        $subscription = Membership::where("user_id", $user->id)->first();

        return json_encode(['matches' => $matches, 'user' => $user, 'subscription' => $subscription], 201);
    });

    Route::get("/reverse-matches", function () {
        $user = User::find(auth()->user()->id)->with('gallery')->with('likes')->first();
        $profile = Profile::where("user_id", $user->id)->first();
        $preference = Preferences::where("user_id", $user->id)->first();
        $matches = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $preference->seekingfor)->orWhere('profiles.favorite_movie', "LIKE", "%".$profile->favorite_movie."%"  )->orWhere('profiles.favorite_music', "LIKE", "%".$profile->favorite_music."%"  )->OrWhere('profiles.hobbies_interest', "LIKE", "%".$profile->hobbies_interest."%"  )->with('gallery')->with('preferences')->with('likes')->inRandomOrder()->paginate(250);
         // $matches = Profile::where('iam', $user->profile->lookingfor)->where('bodytype', $user->preferenceBodytype->type)->whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->latest()->paginate(50);
        $subscription = Membership::where("user_id", $user->id)->first();

        return json_encode(['matches' => $matches, 'user' => $user, 'subscription' => $subscription], 201);
    });


    // Load all preference
    Route::post("/add-preferences", function(Request $request){
        $check_exist_user = Preferences::where("user_id", $request->input('user_id'))->first();




        if($check_exist_user != null){
            return json_encode(['preference' => $check_exist_user]);
        }else{
            $preference = new Preferences(); 
            $preference->user_id = $request->input('user_id');
    
            if($preference->save()){
                return json_encode(['preference' => $preference]);
            }
        }

      
        
    });

    Route::put("/edit-preferences/{id}", [PreferencesController::class,'update']);
    Route::get('/all-preferences', function () {

        // $preference = User::where('id', auth()->user()->id)->with('preferenceAge')->with('preferenceReligion')->with('preferenceBodytype')->with('preferenceFood')->with('preferenceDrink')->with('preferenceSmoke')->with('preferenceRelationship')->first();

        $preferences = Preferences::where("user_id", auth()->user()->id)->first();
        return json_encode(['preference' => $preferences]);
    });

    // Update Preferences
    Route::put('/my-preference', function (Request $request) {

        if ($request->input('min') && $request->input('max')) {
            $preference = PreferenceAge::where('user_id', auth()->user()->id)->first();
            $preference->age_min = $request->input('min');
            $preference->age_max = $request->input('max');
            if ($preference->save()) {
                return json_encode(['message' =>  'Age has been updated successfully']);
            }
        }

        if ($request->input('food')) {
            $preference = PreferenceFood::where('user_id', auth()->user()->id)->first();
            $preference->food_type = $request->input('food');
            if ($preference->save()) {
                return json_encode(['message' =>  'Food has been updated successfully']);
            }
        }

        if ($request->input('drink')) {
            $preference = PreferenceDrink::where('user_id', auth()->user()->id)->first();
            $preference->drink_type = $request->input('drink');
            if ($preference->save()) {
                return json_encode(['message' =>  'Drink has been updated successfully']);
            }
        }

        if ($request->input('relationship')) {
            $preference = PreferenceDesiredRelationship::where('user_id', auth()->user()->id)->first();
            $preference->relationship_type = $request->input('relationship');
            if ($preference->save()) {
                return json_encode(['message' =>  'Relationship has been updated successfully']);
            }
        }


        if ($request->input('bodytype')) {
            $preference = PreferenceBodytype::where('user_id', auth()->user()->id)->first();
            $preference->body_type = $request->input('bodytype');
            if ($preference->save()) {
                return json_encode(['message' =>  'BodyType has been updated successfully']);
            }
        }

        if ($request->input('smoke')) {
            $preference = PreferenceSmoke::where('user_id', auth()->user()->id)->first();
            $preference->type = $request->input('smoke');
            if ($preference->save()) {
                return json_encode(['message' =>  'Smoke has been updated successfully']);
            }
        }

        if ($request->input('religion')) {
            $preference = PreferenceReligion::where('user_id', auth()->user()->id)->first();
            $preference->type = $request->input('religion');
            if ($preference->save()) {
                return json_encode(['message' =>  'Religion has been updated successfully']);
            }
        }
    });

    // Block A User
    Route::get("/block-list", function () {
        // $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->first();
        $blocked = BlockList::where('block_lists.user_id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'block_lists.profile_id')->join('locations', 'locations.user_id', '=', 'block_lists.profile_id')->join('avatars', 'avatars.user_id', '=', 'block_lists.profile_id')->join('preference_ages', 'preference_ages.user_id', '=', 'block_lists.profile_id')->get();


        return json_encode(['blocked' => $blocked], 201);
    });

    Route::post('/block-user', function (Request $request) {


        $check = BlockList::where('user_id', auth()->user()->id)->where('profile_id', $request->input('profile'))->first();
        if ($check == null) {
            $blocked = new BlockList();
            $blocked->user_id = auth()->user()->id;
            $blocked->profile_id = $request->input('profile');
            if ($blocked->save()) {
                return json_encode(['message' => "Profile blocked successfully."], 201);
            }
        }
    });

    //Explore menu
    Route::get('/explore', function () {
        $user = User::where('users.id', auth()->user()->id)->with('gallery')->with('likes')->first();

        // $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','!=', auth()->user()->id)->get(['users.*', 'profiles.*', 'avatars.*', 'locations.*','preference_ages.*','preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*','preference_desired_relationships.*']);
        $preferences = Preferences::where("user_id", auth()->user()->id)->first();
       
        $explore = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $preferences->seekingfor)->where('profiles.age',">=", $preferences->age_min)->where('profiles.age',"<=", $preferences->age_max)->with('gallery')->with('likes')->with('preferences')->inRandomOrder()->paginate(250); 
        return json_encode(['explores' => $explore, 'user' => $user]);
    });

    // Explore search
    Route::post('/explore-search', function (Request $request) {

        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies', 'hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first(['users.*', 'profiles.*', 'avatars.*', 'locations.*', 'preference_ages.*', 'preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*', 'preference_desired_relationships.*']);

        $explore = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $request->input('lookingfor'))->where('profiles.age', ">=", $request->input('age_min'))->where('profiles.age', "<=", $request->input('age_max'))->where('profiles.live_in',"LIKE", "%".$request->input('from')."%")->with('preferences')->with('gallery')->with('likes')->inRandomOrder()->paginate(250);


        return json_encode(['explores' => $explore, 'user' => $user]);
    });

    // Liked Option
    Route::get('/liked-profile', function () {
        $user = User::where('users.id', auth()->user()->id)->with('gallery')->first();

        $likes = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('likeds', 'likeds.user_id', '=', 'users.id')->where('likeds.user_id', $user->id)->with('gallery')->with('preferences')->get();
        return json_encode(['likes' => $likes]);
    });
    // Delete likes
    Route::delete('/likes-delete/{id}', function ($id) {
        $likes = Liked::find($id);
        if ($likes->delete()) {
            return json_encode(['message' => "Unliked"], 201);
        }
    });
    // Get people that liked me
    Route::get('/liked-me', function () {
        $likes = Liked::where('profile_id', auth()->user()->id)->join('profiles', 'profiles.id', '=', 'likeds.user_id')->get();

        return json_encode(['likes' => $likes], 201);
    });
    // Video call
    Route::apiResource('/video-call', VideoCallController::class);
    Route::get('/signal-call', [VideoCallController::class, 'signal']);

    Route::post("/logout", function (Request $request) {
        $user = User::find(auth()->user()->id);
        $user->status = "offline";
        $user->save();

        if (PersonalAccessToken::where("tokenable_id", auth()->user()->id)->delete()) {
            return json_encode(['message' => "Signed Out"]);
        }
    });

    // Notification
    Route::get('/notification', function () {
        $notice = auth()->user()->unreadNotifications;
        return json_encode(['notice' => $notice]);
    });

    Route::get('/notifications', function () {
        $notice = auth()->user()->notifications;
        return json_encode(['notice' => $notice]);
    });


    // Payment subscription
    Route::post('/payment', [PaymentController::class, 'pay']);
    Route::get('/success', [PaymentController::class, 'success']);
    Route::get('/error', [PaymentController::class, 'error']);

    // Quick search of users
    Route::post("/quick-search", function (Request $request) {
        if ($request->name != null) {
            $users = Profile::where('name', "LIKE", '%' . $request->name . '%')->join('avatars', 'avatars.user_id', "=", 'profiles.user_id')->get();

            return json_encode(['users' => $users]);
        }
    });

    // Store offline messages
    Route::post('/send-message', function (Request $request) {
        $message = new Message();
        $message->sender = auth()->user()->id;
        $message->recipient = $request->input('recipient');
        $message->message = $request->input('message');
        

        $check_favorite = Favorite::where('user_id', auth()->user()->id)->where('profile_id', $request->input('recipient'))->first();

        if($request->hasFile('data')){
            $filename = $request->file('data')->getClientOriginalName();
            $ext = pathinfo($filename, PATHINFO_EXTENSION);


            $fileToSave = md5($filename.time()).".".$ext;
            
            $request->file('data')->storeAs("public/messages/", $fileToSave );

            $message->data = $fileToSave;
        }

        $message->data_type = $request->input("type");

        if ($check_favorite !== null) {
            $message->by = "favorite";
        } else {
            $message->by = "normal";
        }
        $message->status = "sent";

        if ($request->input('image') !== null) {
            $message->data = $request->input('image');
        }


        if ($message->save()) {

            return json_encode(['message' => "Message sent"]);
        }
    });

    // Fetch message that was not sent
    Route::get('/get-messages/{id}', function ($id) {
        $recipient =   User::where('users.id', $id)->with('profile')->with('gallery')->with('subscription')->first();

        $messages = Message::where('recipient', auth()->user()->id)->where('sender', $id)->orWhere('sender', auth()->user()->id)->where('recipient', $id)->latest()->get();
        return json_encode(['messages' => $messages, 'recipient' => $recipient]);
    });


    Route::get('/get-sent-messages', function () {
        $messages = Message::join('profiles', 'profiles.user_id', '=', 'messages.recipient')->where('messages.sender', auth()->user()->id)->get();
        return json_encode(['messages' => $messages]);
    });

    Route::get('/get-received-messages', function () {
        $messages = Message::join('profiles', 'profiles.user_id', '=', 'messages.sender')->where('messages.recipient', auth()->user()->id)->get();
        return json_encode(['messages' => $messages]);
    });

    Route::get('/get-favorite-messages', function () {
        $messages = Message::join('profiles', 'profiles.user_id', '=', 'messages.sender')->where('messages.recipient', auth()->user()->id)->where('messages.by', "=", "favorite")->get();
        return json_encode(['messages' => $messages]);
    });
    //Fetch message list from last message


    // Coupon
    Route::post('/get-coupon', [ActionController::class, 'getCoupon']);
    Route::post('/add-coupon', [ActionController::class, 'addCoupon']);

    // Fetch all users from the database
    Route::get('/get-all-users', function () {
        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

        // $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','!=', auth()->user()->id)->get(['users.*', 'profiles.*', 'avatars.*', 'locations.*','preference_ages.*','preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*','preference_desired_relationships.*']);
        $preferences = Preferences::where("user_id", $user->id)->first();
       
        $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $preferences->seekingfor)->where('users.status', "online")->where('profiles.age',">=", $preferences->age_min)->where('profiles.age',"<=", $preferences->age_max)->with('gallery')->with('likes')->with('preferences')->inRandomOrder()->paginate(250); 
       

        
       
        return json_encode(['allusers' => $allusers, 'user' => $user, "preference"=>$preferences]);
    });

    Route::post('/search-users', function (Request $request) {
        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

        // $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','!=', auth()->user()->id)->get(['users.*', 'profiles.*', 'avatars.*', 'locations.*','preference_ages.*','preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*','preference_desired_relationships.*']);
        $preferences = Preferences::where("user_id", $user->id)->first();
       
        if($request->country != "Any" && $request->state != "Any" && $request->city == "undefined"){
            $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $request->seeking)->where('profiles.age',">=", $request->age_min)->where('profiles.age',"<=", $request->age_max)->where('profiles.live_in',"LIKE", "%".$request->country."%")->where('profiles.live_in',"LIKE", "%".$request->state."%")->with('gallery')->with('likes')->with('preferences')->inRandomOrder()->paginate(250); 
       
        }else if($request->country != "Any" && $request->state != "Any" && $request->city != "Any"){
            $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $request->seeking)->where('profiles.age',">=", $request->age_min)->where('profiles.age',"<=", $request->age_max)->where('profiles.live_in',"LIKE", "%".$request->country."%")->where('profiles.live_in',"LIKE", "%".$request->state."%")->where('profiles.live_in',"LIKE", "%".$request->city."%")->with('gallery')->with('likes')->with('preferences')->inRandomOrder()->paginate(250); 
       
        }else if($request->country != 'Any' && $request->state == 'Any' && $request->city == 'undefined'){
            $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->where('profiles.iam', $request->seeking)->where('profiles.age',">=", $request->age_min)->where('profiles.age',"<=", $request->age_max)->where('profiles.live_in',"LIKE", "%".$request->input('country')."%")->with('gallery')->with('likes')->with('preferences')->inRandomOrder()->paginate(250); 
       
        }
        

        
       
        return json_encode(['allusers' => $allusers, 'user' => $user, "preference"=>$preferences]);
    });
});




// Route::post("/forgot-password", [RegisterController::class, 'forgot']);
// Route::get("/password-reset", [RegisterController::class, 'getpasswordreset']);
// Route::post("/password-reset", [RegisterController::class, 'resetpassword']);

Route::post('/login', [LoginController::class, 'store']);
Route::post('/new_register', [RegisterController::class, 'store']);
Route::post('/promo', [RegisterController::class, 'promo']);

Route::get("/all-users", function () {
    $users = User::all();
    return json_encode(['users' => $users]);
});
Route::get("/test", function () {
    $user = User::where('users.id', 26)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies', 'hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

    $gallery = Gallery::where('user_id', 26)->first();

    // $matches = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', $user->lookingfor)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->get();
    // //$matches = Profile::where('iam', $user->profile->lookingfor)->where('bodytype', $user->preferenceBodytype->type)->whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->latest()->paginate(50);
    // $subscription = Membership::where("user_id", $user->id)->first();
    // if($user == null){
    //     return response(['user' => null, 'matches' => null]);
    // }else{
    //   return response(['user'=>$user, "matches"=>$matches, "subscription" => $subscription],201);
    // }
    $blocked = BlockList::where('block_lists.user_id', $user->id)->join('profiles', 'profiles.user_id', '=', 'block_lists.profile_id')->join('locations', 'locations.user_id', '=', 'block_lists.profile_id')->join('avatars', 'avatars.user_id', '=', 'block_lists.profile_id')->join('preference_ages', 'preference_ages.user_id', '=', 'block_lists.profile_id')->get();
    // $blocked = User::join('profiles', 'profiles.user_id','=', 'users.id')->join('block_lists', 'block_lists.user_id', '=', 'users.id')->where('block_lists.user_id', $user->id)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->get();

    return json_encode(['blocked' => $user->gallery]);
});

Route::get('/get-all-test', function () {

    $allusers = User::where('id',"!=",7435)->with('religion')->with('profession')->with('avatar')->with('profile')->with('gallery')->with('hobbies')->with('sexOrientation')->with('preferenceAge')->with('preferenceRelationship')->with('preferenceDrink')->with('preferenceFood')->with('preferenceSmoke')->with('preferenceReligion')->with('preferenceBodytype')->with('location')->paginate(250);
    // $allusers = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', 'female')->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->paginate(250)->shuffle();
    // $user = Profile::join('users', 'users.id', '=', 'profiles.user_id')->join('avatars', 'avatars.user_id', '=', 'profiles.user_id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'profiles.user_id')->join('professions', 'professions.user_id', '=', 'profiles.user_id')->join('locations', 'locations.user_id', '=', 'profiles.user_id')->with('religion')->with('gallery')->with('hobbies')->with('preferenceAge')->with('preferenceSmoke')->with('preferenceDrink')->with('preferenceFood')->with('preferenceRelationship')->with('preferenceReligion')->with('preferenceBodytype')->where('users.id', auth()->user()->id)->first();

    $preferences = Preferences::where("user_id", auth()->user()->id)->first();

    $gallery = User::find(7435)->with('hobbies')->first();



    // print_r($user);
    return json_encode(['allusers' => $allusers,]);
});
