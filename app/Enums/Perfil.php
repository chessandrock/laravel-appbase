<?php

namespace App\Enums;

enum Perfil: string
{
    case ADMIN = 'ADMIN';
    case EDITOR = 'EDITOR';
    case USER = 'USER';
}
