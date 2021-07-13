<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use bfinlay\SpreadsheetSeeder\SpreadsheetSeeder;

class PacientesSeeder extends SpreadsheetSeeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->file = '/database/seeders/pacientes.xlsx';
        $this->timestamps = false;
        $this->truncate = false;
        $this->worksheetTableMapping = ['planilha1' => 'pacientes'];
        $this->mapping = ['id', 'nome', 'data_nascimento', 'telefone', 'tem_comorbidades', 'vacinado_covid19'];
        $this->aliases = [
            '#' => 'id',
            'NOME' => 'nome',
            'DATA DE NASCIMENTO' => 'data_nascimento',
            'TELEFONE' => 'telefone',
            'TEM COMORBIDADES?' => 'tem_comorbidades',
            'JÁ FOI VACINADO CONTRA A COVID 19' => 'vacinado_covid19',
        ];
        $this->dateFormats = [
            'data_nascimento' => 'Y-m-d',
        ];
        
        parent::run();
    }
}
