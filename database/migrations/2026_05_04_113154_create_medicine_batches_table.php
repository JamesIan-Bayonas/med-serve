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
            $table->integer('initial_stock');
            $table->integer('current_stock');
            $table->timestamp('expiration_date')->nullable();
            $table->timestamp('manufactured_date')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('medicine_batches');
    }
};