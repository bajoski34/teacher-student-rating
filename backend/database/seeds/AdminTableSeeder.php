<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [];
        array_push($data, array(
            'role' => \App\Role::$A,
            'first_name' => 'chibuike',
            'last_name' => 'obunike',
            'email' => 'buike@gmail.com',
            'image_path'=> 'teacher/181808.jpg',
            'password' => bcrypt('password'),
            'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
        ));

        array_push($data, array(

            'first_name'=>'Tireni',
            'last_name'=>'Obanure',
            // 'role'=>Role::where('name', ),
            'role'=> 3,
            'image_path'=>'teacher/me_1601647762.jpeg',
            'email'=>'tireni@gmail.com',
            'password'=>bcrypt('password'),
            'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            'updated_at' => DB::raw('CURRENT_TIMESTAMP'),

        ));

        DB::table('users')->insert($data);
    }
}
