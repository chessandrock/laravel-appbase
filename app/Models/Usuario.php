<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use InvalidArgumentException;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use Notifiable;
    use SoftDeletes;

    /**
     * Name of the table associated to the model.
     *
     * @var string
     */
    protected $table = 'usuarios';

    /**
     * The primary key of the model.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Should the primary key be incrementing?
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * Does this model have timestamps?
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'perfil',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'email_verified_at',
        'password',
        'remember_token',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'perfil' => \App\Enums\Perfil::class,
        'password' => 'hashed',
    ];

    /**
     * Is the user an administrator?
     */
    public function getIsAdministratorAttribute()
    {
        return $this->attributes['perfil'] === 'ADMIN';
    }

    /**
     * Is the user an editor?
     */
    public function getIsEditorAttribute()
    {
        return $this->attributes['perfil'] === 'EDITOR';
    }

    /**
     * Calculated attributes.
     *
     * @var array<string, string>
     */
    protected $appends = ['isAdministrator', 'isEditor'];

    /**
     * Users can have many notifications.
     *
     * @throws InvalidArgumentException
     */
    public function notifications(): MorphMany
    {
        return $this->morphMany(Notificacion::class, 'notifiable')->orderBy('created_at', 'desc');
    }
}
