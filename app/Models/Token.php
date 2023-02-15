<?php

namespace App\Models;

use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;

class Token extends SanctumPersonalAccessToken
{
    /**
     * The name of the table associated to the model.
     *
     * @var string
     */
    protected $table = 'personal_access_tokens';
}
