<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseList extends Model
{
    protected $fillable = [
        'course_id', 'student_id','is_rated',
    ];
}
