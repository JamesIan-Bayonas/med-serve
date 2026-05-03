<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Dispensation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * This is crucial for the Dispensation::create() method to work.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'resident_id',
        'medicine_batch_id',
        'quantity_given',
        'dosage_days',
        'dispensed_at',
        'user_id',
    ];

    /**
     * We are using a manual 'dispensed_at' timestamp, so we'll disable Laravel's automatic timestamps.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'dispensed_at' => 'datetime',
    ];
}
