<?php

use App\Events\MessageNotification;
use App\Http\Controllers\ActionController;
use App\Http\Controllers\PromoController;
use App\Models\Avatar;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // Artisan::call('migrate');
    // Artisan::call('migrate:fresh');
    Artisan::call('storage:link');
    Artisan::call('view:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    return view('welcome');
});
Route::get('/migrate', function () {
    Artisan::call('migrate');
    // Artisan::call('migrate:fresh');
    Artisan::call('storage:link');
    Artisan::call('view:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:cache');
    return "Migrate complete";
});

Route::get('/reset', function () {
    Artisan::call('migrate:fresh');
    Artisan::call('storage:link');
    Artisan::call('view:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    return "reset";
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// pages
Route::view('/otp', 'pages.otp');

Route::get('/event', function(){
    event(new MessageNotification("This is my first notification"));
});

Route::get('/listen', function(){
    return "Listen";
});


Route::get('/test', function(){
    $user = User::find(1)->with('likes');
    $age = Profile::where('user_id', 2)->first();
    // $printage = Profile::whereYear('birthday', ">=", $user->preferenceAge->min)->whereYear("birthday", "<=", $user->preferenceAge->max)->with('user')->get();
    // $printage = User::join('profiles', 'profiles.user_id','=', 'users.id')->where('profiles.iam', 'woman')->join('locations', 'locations.user_id', '=', 'users.id')->get();
    $printage = User::join('profiles', 'profiles.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('sexual_orientations', 'sexual_orientations.user_id', '=', 'users.id')->join('religions', 'religions.user_id', '=', 'users.id')->join('hobbies','hobbies.user_id', '=', 'users.id')->join('professions', 'professions.user_id', '=', 'users.id')->join('locations', 'locations.user_id', '=', 'users.id')->join('galleries', 'galleries.user_id', '=', 'users.id')->where('users.id','=', 2)->first(['users.*', 'profiles.*', 'avatars.*']);
    $likes = User::join('profiles', 'profiles.user_id','=', 'users.id')->join('likeds', 'likeds.user_id', '=', 'users.id')->where('likeds.user_id', $user->id)->join('locations', 'locations.user_id', '=', 'users.id')->join('avatars', 'avatars.user_id', '=', 'users.id')->join('preference_ages', 'preference_ages.user_id', '=', 'users.id')->with('gallery')->get();
    return $likes;
});


Route::prefix('admin')->group(function () {

    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    });


    Route::get('/login', function () {
        return view('admin.login');
    });


});

Route::get('/user-upload', function(){
    return view('dataupload');
});

Route::post('/user-import', [ActionController::class, 'fileImport']);

// Route::get('handle-payment', 'PayPalPaymentController@handlePayment')->name('make.payment');
// Route::get('cancel-payment', 'PayPalPaymentController@paymentCancel')->name('cancel.payment');
// Route::get('payment-success', 'PayPalPaymentController@paymentSuccess')->name('success.payment');



Route::get("/delete-none-existing-users", function(){

    $avatars = Avatar::all();

    foreach ( $avatars as $avatar ){
        if(Storage::exists("/public/avatar/".$avatar->first_cover)){

        }else{
            User::find($avatar->user_id)->delete();
        }
    }

    return "Unexisting users deleted successfully";

});


Route::resource('/promo-api', PromoController::class);





