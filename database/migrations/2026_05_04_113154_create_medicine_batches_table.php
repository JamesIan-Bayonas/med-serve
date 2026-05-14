<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('medicine_batches', function (Blueprint $table) {
            $table->id();
            $table->integer('medicine_id'); // Temporary simple ID for testing
            $table->string('batch_number');
            $table->date('date_received');
            $table->date('expiration_date');
            $table->integer('quantity_received');
            $table->integer('quantity_remaining');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medicine_batches');
    }
};