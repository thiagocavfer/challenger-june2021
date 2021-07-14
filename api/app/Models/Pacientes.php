<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pacientes extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'data_nascimento',
        'telefone',
        'tem_comorbidades',
        'vacinado_covid19',
    ];

    public function getTemComorbidadesAttribute($value)
    {
        return $value == 1 ? true : false;
    }

    public function getVacinadoCovid19Attribute($value)
    {
        return $value == 1 ? true : false;
    }

    public function getTelefoneAttribute($value)
    {
        $cleaned = preg_replace('/[^[:digit:]]/', '', $value);
        preg_match('/(\d{2})(\d{4})(\d{4})/', $cleaned, $matches);
        return "{$matches[1]} {$matches[2]}-{$matches[3]}";
    }

}
