<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Usuario::factory()->create([
            'nombre' => 'Usuario',
            'perfil' => \App\Enums\Perfil::USER,
            'email' => 'user@example.org',
            'password' => 'password',
        ]);
    }
}
