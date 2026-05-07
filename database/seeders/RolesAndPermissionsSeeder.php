<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // 1. IMPORTANT: Reset cached roles and permissions to prevent "old data" errors
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // 2. CREATE THE PERMISSIONS FIRST
        // Ensure these strings match the ones you use in your roles below EXACTLY.
        $permissions = [
            'manage users',
            'manage patient records',
            'manage health services',
            'manage inventory',
            'dispense medicine'
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // 3. CREATE ROLES AND ASSIGN THE PERMISSIONS
        
        // Admin
        $admin = Role::create(['name' => 'Admin']);
        // Note: Admin access is handled by the Gate::before in AppServiceProvider

        // Health Staff (Nurse, Midwife, BHW)
        $healthStaffPermissions = [
            'manage patient records', 
            'manage health services',   
            'dispense medicine'
        ];

        Role::create(['name' => 'Nurse'])->givePermissionTo($healthStaffPermissions);
        Role::create(['name' => 'Midwife'])->givePermissionTo($healthStaffPermissions);
        Role::create(['name' => 'Barangay Health Worker'])->givePermissionTo($healthStaffPermissions);

        // Inventory Staff
        Role::create(['name' => 'Inventory Staff'])->givePermissionTo(['manage inventory']);

        // Volunteer
        Role::create(['name' => 'Volunteer'])->givePermissionTo(['dispense medicine']);
    }
}