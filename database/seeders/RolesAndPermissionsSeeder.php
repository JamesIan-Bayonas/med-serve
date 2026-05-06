<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // 1. Create Permissions
        Permission::create(['name' => 'dispense medicine']);
        Permission::create(['name' => 'manage inventory']);
        Permission::create(['name' => 'view patient records']);

        // 2. Create Roles and assign existing permissions
        $admin = Role::create(['name' => 'Admin']); // e.g., Head Health Worker
        $admin->givePermissionTo(Permission::all());

        $healthWorker = Role::create(['name' => 'Health Worker']);
        $healthWorker->givePermissionTo(['dispense medicine', 'view patient records']);

        $resident = Role::create(['name' => 'Resident']);
        // Residents usually only view their own data, so they might not need global permissions here.
    }
}