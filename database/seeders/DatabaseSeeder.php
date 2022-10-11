<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $user = new User();
        $user->email = 'admin@admin.com';
        $user->password = Hash::make('22222222');
        $user->role = "admin";
        $user->save();


        $names = [];
        for($n = 1; $n <= 22410; $n++){

        }
    }
}
