<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = [
        'first_name', 'last_name', 'date_of_birth', 
        'gender', 'contact_number', 'address_purok'
    ];

    // A patient can have many medicine dispensations over time
    public function dispensations()
    {
        return $this->hasMany(Dispensation::class);
    }
}
