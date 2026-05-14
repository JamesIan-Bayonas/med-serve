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
        // 1. Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // 2. CREATE THE PERMISSIONS AND STORE THE OBJECTS IN AN ARRAY
        $permissionsList = [
            'manage users',
            'manage patient records',
            'manage health services',
            'manage inventory',
            'dispense medicine'
        ];

        $permissions = [];
        foreach ($permissionsList as $permissionName) {
            // Store the newly created Eloquent model in the array
            $permissions[$permissionName] = Permission::create([
                'name' => $permissionName, 
                'guard_name' => 'web'
            ]);
        }

        // 3. CREATE ROLES AND ASSIGN THE PERMISSION OBJECTS (NOT STRINGS)
        
        // Admin
        Role::create(['name' => 'Admin', 'guard_name' => 'web']);

        // Health Staff (Nurse, Midwife, BHW)
        // Pass the actual Model objects instead of strings
        $healthStaffPermissions = collect([
            $permissions['manage patient records'], 
            $permissions['manage health services'],   
            $permissions['dispense medicine']
        ]);

        Role::create(['name' => 'Nurse', 'guard_name' => 'web'])->syncPermissions($healthStaffPermissions);
        Role::create(['name' => 'Midwife', 'guard_name' => 'web'])->syncPermissions($healthStaffPermissions);
        Role::create(['name' => 'Barangay Health Worker', 'guard_name' => 'web'])->syncPermissions($healthStaffPermissions);

        // Inventory Staff
        Role::create(['name' => 'Inventory Staff', 'guard_name' => 'web'])
            ->givePermissionTo($permissions['manage inventory']);

        // Volunteer
        Role::create(['name' => 'Volunteer', 'guard_name' => 'web'])
            ->givePermissionTo($permissions['dispense medicine']);
    }
}