<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = [
    'name',
    'age',
    'gender',
    'height',
    'weight',
    'reason_for_checkup',
];
}