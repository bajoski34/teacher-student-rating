<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'name', 'course_code', 'teacher_id', 'department_id', 'rate_status'
    ];
}
