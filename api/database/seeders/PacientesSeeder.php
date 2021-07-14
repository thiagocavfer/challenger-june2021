<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use bfinlay\SpreadsheetSeeder\SpreadsheetSeeder;

class PacientesSeeder extends SpreadsheetSeeder
{
    
    /**
     * 
     * Biblioteca utilizada: https://github.com/bfinlay/laravel-excel-seeder
     * A biblioteca conta com bons recursos para a inserção de dados no banco através de planilhas
     * podendo inserir desde de uma até várias planilhas.
     * 
     * Para popular a tabela com os dados da planilha pacientes.xlsx
     * execute o comando: php artisan db:seed --class=PacientesSeeder
     * 
     */
    public function run()
    {
        //Informando onde está a planilha para a inserção dos dados
        $this->file = '/database/seeders/planilhas/pacientes.xlsx';

        //A tabela não utiliza os campos created_at e updated_at padroes do Laravel
        $this->timestamps = false;

        /* 
         * Limpando a tabela para garantir a inserção dos dados iniciais 
         * deixe false caso queira apenas adicionar dados a tabela
        */
        $this->truncate = true;

        //Mapeando a planilha do arquivo com a tabela no banco
        $this->worksheetTableMapping = ['planilha1' => 'pacientes'];

        //Mapeando os campos da tabela
        $this->mapping = ['id', 'nome', 'data_nascimento', 'telefone', 'tem_comorbidades', 'vacinado_covid19'];

        //Informando a formatação do campo de data como deve ser inserida no banco
        $this->dateFormats = [
            'data_nascimento' => 'Y-m-d',
        ];
        
        parent::run();
    }
}
