<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        // 1. Call the RBAC seeder first so roles exist before users are created
        $this->call([
            RolesAndPermissionsSeeder::class,
        ]);

        // 2. Create the primary Admin user and assign the role
        $admin = User::factory()->create([
            'name' => 'System Administrator',
            'email' => 'admin@medserve.com',
            'password' => bcrypt('password'),
        ]);
        
        $admin->assignRole('Admin');
    }
}