<?php

use App\Http\Controllers\ActionController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\AvatarController;
use App\Http\Controllers\BodyTypeController;
use App\Http\Controllers\FavoriteController;
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


Route::middleware('auth:sanctum')->get('/dashboard', function(){

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
    Route::apiResource('/profile', ProfileController::class);

    Route::get('/user-profile', function(){
         $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

        return json_encode(['user' => $user]);
    });

    Route::get('/user-profile/{id}', function($id){
        $user = User::where('users.id', $id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('religion')->with('gallery')->with('hobbies')->with('preferenceAge')->with('preferenceSmoke')->with('preferenceDrink')->with('preferenceFood')->with('preferenceRelationship')->with('preferenceReligion')->with('preferenceBodytype')->first();
        return response(['user' => $user], 201);
    });

    Route::put('/profile', function(Request $request){
        $profile = Profile::where('user_id', auth()->user()->id)->first();

        if($request->input('iam') != null){
          $profile->iam = $request->input('iam');
        }

        if($request->input('lookingfor') != null){
            $profile->lookingfor = $request->input('lookingfor');
        }

        if($request->input('name') != null){
            $profile->name = $request->name;
        }

        if($request->birthday != null){
            $profile->birthday =  $request->birthday;
        }

        if( $request->input('bodytype') != null){
            $profile->bodytype = $request->input('bodytype');

        }

        if( $request->input('body_show') != null){
            $profile->show_bodytype = $request->input('body_show');

        }
        if( $request->input('height') != null){
            $profile->height = $request->input('height');

        }
        if( $request->input('height_show') != null){
            $profile->show_height = $request->input('height_show');
        }
        if( $request->input('drink') != null){
            $profile->life_style_drink = $request->input('drink');
        }
        if( $request->input('smoke') != null){
            $profile->life_style_smoke = $request->input('smoke');
        }
        if( $request->input('food') != null){
            $profile->life_style_food = $request->input('food');
        }
        if( $request->input('relationship') != null){
            $profile->life_style_relationship = $request->input('relationship');
        }







        if(  $profile->save() ){
            return response(['message'=>'profile information updated'], 201);
        }else{
            return response(['message'=>'Something went wrong.'], 401);
        }
    });
    Route::apiResource('/religion', ReligionController::class);
    Route::apiResource('/profession', ProfessionController::class);
    Route::apiResource('/sexual-orientation', SexualOrientationController::class);
    Route::apiResource('/user-hobby', HobbyController::class);
    Route::apiResource('/avatar', AvatarController::class);
    Route::apiResource('/gallery', GalleryController::class);
    Route::apiResource('/location', LocationController::class);

    // Send message notification
    Route::post('/message-notification',function(Request $request){
        $user = User::find($request->input('id'));
        $data = [
            'name'  => $user->profile->name,
            'message' => $request->input('message'),
        ];

        Notification::send($user, new MessageNotification($data));

    });

    // delete gallery
    Route::delete('/gallery-delete/{id}', function($id){
        $gallery = Gallery::find($id);
        Storage::delete("public/gallery/".$gallery->cover);
        if($gallery->delete()){
            return response(['message'=>"Image deleted successfully"],201);
        }
    });

    Route::put('/sexual_orientation', function(Request $request){
        $sexualOrientation = SexualOrientation::where('user_id', auth()->user()->id)->first();


            $sexualOrientation->sex_type = $request->input('type');


            $sexualOrientation->show = $request->input('show');




        if($sexualOrientation->save()){
            return response(['message' => "Sexual Orientation updated"],201);
        }

    });
    // Update Religion
    Route::put('/religion', function (Request $request){
        $religion = Religion::where('user_id', auth()->user()->id)->first();

        $religion->relgion_name = $request->input('name');

        if($religion->save()) {

            return response(['message' => 'Religion updated successfully'],200);
        }
    });

    // Delete Gallery

    // Update Avatar
    Route::post('/avatar-update', function(Request $request){

        if(!auth()->user()->id){
            return response(['message' => "Token expired, Login to continue."], 401);
         }else{
            $avatar = Avatar::where('user_id',auth()->user()->id)->first();
        //AVATAR PROFILE



        if($request->hasFile('cover')){

            if($avatar->cover !== null){
              Storage::delete("public/cover/".$avatar->cover);
            }

            $fileWithExt = $request->file('cover')->getClientOriginalName();
            $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
            $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
            $fileToSave = md5($filename.time()).'.'.$ext;
            $request->file('cover')->storeAs('public/cover/', $fileToSave);

            $avatar->cover = $fileToSave;






        }

        if($request->hasFile('avatar1')){
            Storage::delete("/public/avatar/".$avatar->first_cover);
            $fileWithExt = $request->file('avatar1')->getClientOriginalName();
            $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
            $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
            $fileToSave = md5($filename.time()).'.'.$ext;
            $request->file('avatar1')->storeAs('public/avatar/', $fileToSave);

            $avatar->first_cover = $fileToSave;

        }

        if($request->hasFile('avatar2')){
            Storage::delete("/public/avatar/".$avatar->second_cover);
            $fileWithExt = $request->file('avatar2')->getClientOriginalName();
            $filename = pathinfo($fileWithExt, PATHINFO_FILENAME);
            $ext = pathinfo($fileWithExt, PATHINFO_EXTENSION);
            $fileToSave = md5($filename.time()).'.'.$ext;
            $request->file('avatar2')->storeAs('public/avatar/', $fileToSave);

            $avatar->second_cover = $fileToSave;

        }

        if($request->input('bio') != null){
            $avatar->bio = $request->input('bio');
        }

        if($avatar->save()){

            return response(['message' =>  'Profile updated successfully'], 201);



        }


    }
    });

    // Update for religion, professions, sexual_orientations, user hobby, avatar, gallery and location
    Route::put('/profession', function(Request $request){
        $profession = Profession::where('user_id', auth()->user()->id)->first();

        if($request->input('job') != null){
            $profession->job = $request->input('job');
        }

        if($request->input('description') != null){
            $profession->description = $request->input('description');
        }


        if($profession->save()){
            return response(['message' => 'Job updated successfully'], 200);
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
    Route::post("/buy-coins", function(Request $request){
        $member = Membership::where('user_id',auth()->user()->id)->first();
        if($member == null){
            return json_encode(['message'=>'You are not legible to buy credit.']);
        }else{
            $member->credit = $member->credit + number_format($request->input('credit'));
            if($member->save()){
                return json_encode(['message'=>'Credit purchase was successful.']);
            }
        }
    });

    // Gift membership to a friend
    Route::post("/gift-membership", function(Request $request){
        $check = Membership::where('user_id', $request->input('friendid'))->first();
        if($check == null){
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

            if($membership->save()){
                return json_encode(['message'=>"Subcription successful."]);
            }else{
                return json_encode(['message'=>'Something went wrong']);
            }
        }else{


            if($request->input('address') != null){
               $check->address = $request->input('address');
            }

            if($request->input('country') != null){
               $check->country = $request->input('country');
            }

            if($request->input('state') != null){
                $check->state = $request->input('state');
            }

            if($request->input('city') != null){
                $check->city = $request->input('city');
            }

           if($request->input('zip') != null){
            $check->zip = $request->input('zip');
           }

            $check->plan_type = $request->input('plan_type');
            $check->duration = $request->input('duration');
            $check->expiry = Carbon::parse($check->expiry)->addDays($request->input('duration'));


        if($check->save()){
            return json_encode(['message'=>"Subcription successful."]);
        }else{
            return json_encode(['message'=>'Something went wrong']);
        }
        }
    });


    Route::post("/view-profile", function(Request $request){
        $check = ProfileView::where('user_id', auth()->user()->id)->where('profile_id', $request->input('profile'))->first();
        if($check == null){
            $profile = new ProfileView();
            $profile->user_id = auth()->user()->id;
            $profile->profile_id = $request->input('profile');

            $user = User::find($request->input('profile'));
        $data = [
            'name'  => auth()->user()->profile->name,
            'message' => auth()->user()->profile->name." viewed your profile.",
        ];

        Notification::send($user, new MessageNotification($data));

            if($profile->save()){
                return response(['message'=> "Profile Viewed."], 201);
            }
        }
    });
    // ================== Fetch Gallery ==========================================//
    Route::get('/user-gallery/{id}', function($id){
        $gallery = Gallery::where('user_id', $id)->get();
        return response(['gallery'=>$gallery],201);
    });

    Route::get('/matches', function () {
        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

        $matches = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', $user->lookingfor)->where('profiles.age', ">=", $user->age_min)->where('profiles.age', "<=", $user->age_max)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->inRandomOrder()->paginate(250);
        // $matches = Profile::where('iam', $user->profile->lookingfor)->where('bodytype', $user->preferenceBodytype->type)->whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->latest()->paginate(50);
        $subscription = Membership::where("user_id", $user->id)->first();

        return response(['matches'=>$matches, 'user'=>$user, 'subscription'=>$subscription],201);
    });

    Route::get("/mutual-matches", function(){
        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

        $matches = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', $user->lookingfor)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->where('preference_food.food_type', $user->preferenceFood->food_type)->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->where('preference_drinks.drink_type', $user->preferenceDrink->drink_type)->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->where('preference_smokes.smoke_type', $user->preferenceSmoke->smoke_type)->with('gallery')->inRandomOrder()->paginate(250);
        // $matches = Profile::where('iam', $user->profile->lookingfor)->where('bodytype', $user->preferenceBodytype->type)->whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->latest()->paginate(50);
        $subscription = Membership::where("user_id", $user->id)->first();

        return json_encode(['matches'=> $matches, 'user'=>$user, 'subscription'=>$subscription],201);
    });

    Route::get("/reverse-matches", function(){
        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

        $matches = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', $user->lookingfor)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->where('preference_food.food_type',"!=",$user->preferenceFood->food_type)->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->where('preference_drinks.drink_type', "!=",$user->preferenceDrink->drink_type)->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->where('preference_smokes.smoke_type',"!=", $user->preferenceSmoke->smoke_type)->with('gallery')->inRandomOrder()->paginate(250);
        // $matches = Profile::where('iam', $user->profile->lookingfor)->where('bodytype', $user->preferenceBodytype->type)->whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->latest()->paginate(50);
        $subscription = Membership::where("user_id", $user->id)->first();

        return json_encode(['matches'=>$matches, 'user'=>$user, 'subscription'=>$subscription],201);
    });


    // Load all preference
    Route::get('/all-preferences', function(){

        $preference = User::where('id', auth()->user()->id)->with('preferenceAge')->with('preferenceReligion')->with('preferenceBodytype')->with('preferenceFood')->with('preferenceDrink')->with('preferenceSmoke')->with('preferenceRelationship')->first();

        return json_encode(['preference'=>$preference], 201);
    });

    // Update Preferences
    Route::put('/my-preference', function(Request $request){

        if($request->input('min') && $request->input('max')){
            $preference = PreferenceAge::where('user_id', auth()->user()->id)->first();
            $preference->age_min = $request->input('min');
            $preference->age_max = $request->input('max');
            if($preference->save()){
                return json_encode(['message' =>  'Age has been updated successfully']);
            }

        }

        if($request->input('food')){
            $preference = PreferenceFood::where('user_id', auth()->user()->id)->first();
            $preference->food_type = $request->input('food');
            if($preference->save()){
                return json_encode(['message' =>  'Food has been updated successfully']);
            }

        }

        if($request->input('drink')){
            $preference = PreferenceDrink::where('user_id', auth()->user()->id)->first();
            $preference->drink_type = $request->input('drink');
            if($preference->save()){
                return json_encode(['message' =>  'Drink has been updated successfully']);
            }

        }

        if($request->input('relationship')){
            $preference = PreferenceDesiredRelationship::where('user_id', auth()->user()->id)->first();
            $preference->relationship_type = $request->input('relationship');
            if($preference->save()){
                return json_encode(['message' =>  'Relationship has been updated successfully']);
            }

        }


        if($request->input('bodytype')){
            $preference = PreferenceBodytype::where('user_id', auth()->user()->id)->first();
            $preference->body_type = $request->input('bodytype');
            if($preference->save()){
                return json_encode(['message' =>  'BodyType has been updated successfully']);
            }

        }

        if($request->input('smoke')){
            $preference = PreferenceSmoke::where('user_id', auth()->user()->id)->first();
            $preference->type = $request->input('smoke');
            if($preference->save()){
                return json_encode(['message' =>  'Smoke has been updated successfully']);
            }

        }

        if($request->input('religion')){
            $preference = PreferenceReligion::where('user_id', auth()->user()->id)->first();
            $preference->type = $request->input('religion');
            if($preference->save()){
                return json_encode(['message' =>  'Religion has been updated successfully']);
            }

        }
    });

    // Block A User
    Route::get("/block-list", function(){
        // $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->first();
        $blocked = BlockList::where('block_lists.user_id', auth()->user()->id)->join('profiles','profiles.user_id', '=', 'block_lists.profile_id')->join('locations', 'locations.user_id', '=', 'block_lists.profile_id')->join('avatars', 'avatars.user_id', '=', 'block_lists.profile_id')->join('preference_ages', 'preference_ages.user_id', '=', 'block_lists.profile_id')->get();


       return json_encode(['blocked' => $blocked], 201);
    });

    Route::post('/block-user', function(Request $request){


        $check = BlockList::where('user_id', auth()->user()->id)->where('profile_id', $request->input('profile'))->first();
        if($check == null){
            $blocked = new BlockList();
            $blocked->user_id = auth()->user()->id;
            $blocked->profile_id = $request->input('profile');
            if($blocked->save()){
                return json_encode(['message'=> "Profile blocked successfully."], 201);
            }
        }
    });

//Explore menu
    Route::get('/explore', function(){

         $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first(['users.*', 'profiles.*', 'avatars.*', 'locations.*','preference_ages.*','preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*','preference_desired_relationships.*']);

        $explore = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', $user->lookingfor)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->inRandomOrder()->paginate(250);
       return json_encode(['explores' => $explore, 'user'=>$user]);
    });

    // Explore search
    Route::post('/explore-search', function(Request $request){

        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first(['users.*', 'profiles.*', 'avatars.*', 'locations.*','preference_ages.*','preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*','preference_desired_relationships.*']);

       $explore = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', $request->input('lookingfor'))->where('profiles.age',">=", $request->input('age_min'))->where('profiles.age',"<=", $request->input('age_max'))->join('locations', 'locations.user_id', '=', 'users.id')->where('locations.country', $request->input('from'))->orWhere('locations.country', $request->input('code'))->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->inRandomOrder()->paginate(250);


       return json_encode(['explores' => $explore, 'user'=>$user]);
   });

    // Liked Option
    Route::get('/liked-profile', function(){
        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->first();

        $likes = User::join('profiles', 'profiles.user_id','=', 'users.id')->join('likeds', 'likeds.user_id', '=', 'users.id')->where('likeds.user_id', $user->id)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->get();
       return json_encode(['likes' => $likes]);
    });
// Delete likes
    Route::delete('/likes-delete/{id}', function($id){
        $likes = Liked::find($id);
        if($likes->delete()){
            return json_encode(['message'=> "Unliked"], 201);
        }
    });
    // Get people that liked me
    Route::get('/liked-me', function(){
        $likes = Liked::where('profile_id', auth()->user()->id)->join('profiles','profiles.id', '=', 'likeds.user_id')->join('locations', 'locations.user_id', '=', 'likeds.user_id')->join('avatars', 'avatars.user_id', '=', 'likeds.user_id')->join('preference_ages', 'preference_ages.user_id', '=', 'likeds.user_id')->get();

        return json_encode(['likes'=>$likes], 201);
    });
    // Video call
    Route::apiResource('/video-call', VideoCallController::class);
    Route::get('/signal-call', [VideoCallController::class, 'signal']);

    Route::post("/logout", function(Request $request){
           $user = User::find(auth()->user()->id);
           $user->status = "offline";
           $user->save();

        if(PersonalAccessToken::where("tokenable_id", auth()->user()->id)->delete()){
            return json_encode(['message' => "Signed Out"]);
        }
    });

    // Notification
    Route::get('/notification', function(){
        $notice = auth()->user()->unreadNotifications;
        return response(['notice' => $notice]);
    });

    Route::get('/notifications', function(){
        $notice = auth()->user()->notifications;
        return json_encode(['notice' => $notice]);
    });


    // Payment subscription
    Route::post('/payment', [PaymentController::class, 'pay']);
    Route::get('/success', [PaymentController::class, 'success']);
    Route::get('/error', [PaymentController::class, 'error']);

    // Quick search of users
    Route::post("/quick-search", function(Request $request){
        if($request->name != null){
            $users = Profile::where('name',"LIKE", '%'.$request->name.'%')->join('avatars', 'avatars.user_id', "=", 'profiles.user_id')->get();

            return json_encode(['users' => $users]);
        }

    });

    // Store offline messages
    Route::post('/send-message', function(Request $request){
        $message = new Message();
        $message->sender = auth()->user()->id;
        $message->recipient = $request->input('recipient');
        $message->message = $request->input('message');

        $check_favorite = Favorite::where('user_id', auth()->user()->id)->where('profile_id', $request->input('recipient'))->first();

        if($check_favorite !== null){
            $message->by = "favorite";
        }else{
            $message->by = "normal";
        }
        $message->status = "sent";

        if($request->input('image') !== null){
            $message->data = $request->input('image');
        }


        if($message->save()){

            return json_encode(['message'=>"Message sent"]);
        }
    });

    // Fetch message that was not sent
    Route::get('/get-messages/{id}', function($id){
        $recipient =   User::where('users.id', $id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->first(['users.*', 'profiles.name','profiles.user_id',  'profiles.age', 'avatars.first_cover', 'locations.country', 'locations.state', 'locations.city' ]);

        $messages = Message::where('recipient', auth()->user()->id)->where('sender', $id)->orWhere('sender', auth()->user()->id)->where('recipient', $id)->get();
        return json_encode(['messages'=>$messages, 'recipient'=>$recipient]);
    });


    Route::get('/get-sent-messages', function(){
        $messages = Message::join('profiles', 'profiles.user_id', '=','messages.recipient')->join('avatars', 'avatars.user_id', '=','messages.recipient')->where('messages.sender', auth()->user()->id)->get();
        return json_encode(['messages'=>$messages]);
    });

    Route::get('/get-received-messages', function(){
        $messages = Message::join('profiles', 'profiles.user_id', '=','messages.sender')->join('avatars', 'avatars.user_id', '=','messages.sender')->where('messages.recipient', auth()->user()->id)->get();
        return json_encode(['messages'=>$messages]);
    });

    Route::get('/get-favorite-messages', function(){
        $messages = Message::join('profiles', 'profiles.user_id', '=','messages.sender')->join('avatars', 'avatars.user_id', '=','messages.sender')->where('messages.recipient', auth()->user()->id)->where('messages.by',"=", "favorite")->get();
        return json_encode(['messages'=>$messages]);
    });
    //Fetch message list from last message


    // Coupon
    Route::post('/get-coupon', [ActionController::class, 'getCoupon']);
    Route::post('/add-coupon', [ActionController::class, 'addCoupon']);

    // Fetch all users from the database
    Route::get('/get-all-users', function(){
        $user = User::where('users.id', auth()->user()->id)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

        // $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','!=', auth()->user()->id)->get(['users.*', 'profiles.*', 'avatars.*', 'locations.*','preference_ages.*','preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*','preference_desired_relationships.*']);
        $allusers = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', $user->lookingfor)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->inRandomOrder()->paginate(250);
        return json_encode(['allusers'=>$allusers, 'user'=>$user]);
    });
});




Route::post('/login', [LoginController::class, 'store']);
Route::post('/new_register', [RegisterController::class, 'store']);

Route::get("/all-users", function(){
    $users = User::all();
    return response(['users' => $users]);
});
Route::get("/test", function(){
    $user = User::where('users.id', 26)->join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->with('gallery')->with('likes')->first();

    $gallery = Gallery::where('user_id', 26)->first();

    // $matches = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', $user->lookingfor)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->get();
    // //$matches = Profile::where('iam', $user->profile->lookingfor)->where('bodytype', $user->preferenceBodytype->type)->whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->latest()->paginate(50);
    // $subscription = Membership::where("user_id", $user->id)->first();
    // if($user == null){
    //     return response(['user' => null, 'matches' => null]);
    // }else{
    //   return response(['user'=>$user, "matches"=>$matches, "subscription" => $subscription],201);
    // }
    $blocked = BlockList::where('block_lists.user_id', $user->id)->join('profiles','profiles.user_id', '=', 'block_lists.profile_id')->join('locations', 'locations.user_id', '=', 'block_lists.profile_id')->join('avatars', 'avatars.user_id', '=', 'block_lists.profile_id')->join('preference_ages', 'preference_ages.user_id', '=', 'block_lists.profile_id')->get();
    // $blocked = User::join('profiles', 'profiles.user_id','=', 'users.id')->join('block_lists', 'block_lists.user_id', '=', 'users.id')->where('block_lists.user_id', $user->id)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->get();

    return response(['blocked' => $user->gallery]);
});

Route::get('/get-all-test', function(){

    // $allusers = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->join('preference_drinks', 'preference_drinks.user_id', '=', 'users.id')->join('preference_smokes', 'preference_smokes.user_id', '=', 'users.id')->join('preference_food', 'preference_food.user_id', '=', 'users.id')->join('preference_bodytypes', 'preference_bodytypes.user_id', '=', 'users.id')->join('preference_religions', 'preference_religions.user_id', '=', 'users.id')->join('preference_desired_relationships', 'preference_desired_relationships.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','!=', auth()->user()->id)->get(['users.*', 'profiles.*', 'avatars.*', 'locations.*','preference_ages.*','preference_drinks.*', 'preference_smokes.*', 'preference_food.*', 'preference_bodytypes.*', 'preference_religions.*','preference_desired_relationships.*']);
    $allusers = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', 'female')->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->paginate(250)->shuffle();
    return json_encode(['allusers'=>$allusers,  ]);
});
