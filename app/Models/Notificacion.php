<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Notifications\DatabaseNotification;

class Notificacion extends DatabaseNotification
{
    use HasFactory;

    /**
     * The name of the table associated to the model.
     *
     * @var string
     */
    protected $table = 'notificaciones';

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
    public $incrementing = false;

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
        'type',
        'notifiable_type',
        'notifiable_id',
        'data',
        'read_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'read_at' => 'datetime',
    ];

    /**
     * Calculated attributes.
     *
     * @var array<string, string>
     */
    protected $appends = [];

    /**
     * Acts as notifiable
     */
    public function notifiable(): MorphTo
    {
        return $this->morphTo();
    }
}
