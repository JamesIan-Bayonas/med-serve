<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDispensationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        // This ensures that only authenticated users can make this request.
        // You might add more complex authorization logic here later,
        // e.g., checking if the user has a 'health-worker' role.
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            // The comment from your controller is preserved here.
            // TODO: Update 'users' to 'residents' once the residents table and model are created.
            'resident_id' => 'required|exists:users,id',

            // Ensures that the medicine exists and has at least one batch record.
            'medicine_id' => 'required|exists:medicine_batches,medicine_id',
            'quantity' => 'required|integer|min:1',
            'dosage_days' => 'required|integer|min:1',
        ];
    }
}