<?php

namespace Database\Seeders;

use App\Models\Post;
use DateTime;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        // $post1 = [
        //     [
        //         'firstName' => 'Post1',
        //         'description' => 'description1',
        //         'created_at' => now()
        //     ],
        //     [
        //         'title' => 'Post1',
        //         'description' => 'description1',
        //         'created_at' => now()
        //     ],
        // ];
        // Post::insert($post1);
    }
}
