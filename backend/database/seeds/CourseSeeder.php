<?php

use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
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
            'name' => 'Introduction to Statistics',
            'course_code' => 'STAT 101',
            'department_id' => 4,
            'teacher_id' => 'Tch/3',
            'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
        ));

        array_push($data, array(
            'name' => 'Introduction to Visual Basics',
            'course_code' => 'COSC 202',
            'department_id' => 1,
            'teacher_id' => 'Tch/8',
            'created_at' => DB::raw('CURRENT_TIMESTAMP'),
            'updated_at' => DB::raw('CURRENT_TIMESTAMP'),
        ));
        DB::table('courses') ->truncate();
        DB::table('courses')->insert($data);
    }
}
