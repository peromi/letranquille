<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function avatar(){
        return $this->hasOne(Avatar::class);
    }

    public function profile(){
        return $this->hasOne(Profile::class);
    }
    public function subscription(){
        return $this->hasOne(Membership::class);
    }
    public function preferences(){
        return $this->hasOne(Preferences::class);
    }

    public function sexOrientation(){
        return $this->hasOne(SexualOrientation::class);
    }

    public function religion(){
        return $this->hasOne(Religion::class);
    }

    public function profession(){
        return $this->hasOne(Profession::class);
    }

    public function hobbies(){
        return $this->hasMany(Hobby::class);
    }

    public function gallery(){
        return $this->hasMany(Gallery::class);
    }

    public function location(){
        return $this->hasOne(Location::class);
    }

    public function preferenceAge(){
        return $this->hasOne(PreferenceAge::class);
    }

    public function preferenceRelationship(){
        return $this->hasOne(PreferenceDesiredRelationship::class);
    }

    public function preferenceDrink(){
        return $this->hasOne(PreferenceDrink::class);
    }

    public function preferenceFood(){
        return $this->hasOne(PreferenceFood::class);
    }

    public function preferenceSmoke(){
        return $this->hasOne(PreferenceSmoke::class);
    }

    public function preferenceReligion(){
        return $this->hasOne(PreferenceReligion::class);
    }

    public function preferenceBodytype(){
        return $this->hasOne(PreferenceBodytype::class);
    }

    public function likes(){
        return $this->hasMany(Liked::class);
    }

    public function blocklist(){
        return $this->hasMany(BlockList::class);
    }

    public function favorite(){
        return $this->hasMany(Favorite::class);
    }

    public function profileview(){
        return $this->hasMany(ProfileView::class);
    }
}
