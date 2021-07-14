# Desafio: Pacientes COVID-19

## Repositório
Para clonar o repositório basta executar o comando
```
git clone https://github.com/alexanderlima/challenger-june2021
```

## Executando Backend/API

### Utilizando o Docker
Costumo sempre utilizar nos projetos que trabalho, como ambiente de desenvolvimento, o Docker, e neste caso especificamente, como estamos utilizando o Laravel, uso o projeto Laradock, que já vem com um grande número de containers para utilizar o Docker com o Laravel, até mesmo o Node.

#### Instalando o Docker e docker-compose
Caso não possua o Docker instalado na máquina, basta acessar https://docs.docker.com/engine/install/, clicar no link do seu sistema operacional e seguir os passos para a instalação.

Após a instalação do Docker instale também o **docker-compose**, seguindo as instruções que se encontram em https://docs.docker.com/compose/install/.

### Utilizando o Laradock
Toda a documentação deste projeto se encontra em https://laradock.io/.

Para clonar o projeto basta executar o comando: 
```
git clone https://github.com/laradock/laradock.git
```
Ele deve ser clonado para a raíz dos projetos, ficando uma estrutura de pastas semelhante a esta:

- api
- challenge
- laradock

#### Executando os containers do Laradock
Um vez clonado o Laradock, acesse a pasta via terminal e execute o seguinte comando:
```
docker-compose up -d workspace php-fpm nginx mysql
```
Assim os seguintes containers serão levantados:
- workspace: O espaço de trabalho onde será possível rodar comandos de um servidor Linux
- php-fpm: Container com PHP
- nginx: Container com nginx
- mysql: Container com mysql

**Atenção!!**
Caso execute somente o comando ``` docker-compose up -d ```, sem especificar os containers, o Docker irá levantar todos os containers, e acredite, são muitos.

### Instalando as bibliotecas utilizadas na API
Uma vez que o projeto já foi clonado para sua máquina, será necessária a instalação das bibliotecas utilizadas.

Para isso, primeiro acesse o container workspace com o seguinte comando:
```
sudo docker-compose exec workspace bash
```
Uma vez dentro do container, vá até a pasta **api**.
```
cd api
```
Em seguida rode o seguinte comando:
```
composer install ou composer update
```

Uma vez que os containers estão funcionando e o composer foi atualizado, ao acessar http://localhost/api/ deverá receber a mensagem *"Yes! A API funcionando"*.

### Criando o banco de dados
O nome do banco de dados utilizado no projeto foi "default", caso deseje usar outro basta alterar no arquivo ".env" a variável DB_DATABASE, bem como o usuário e senha nas variáveis DB_USERNAME e DB_PASSWORD.

Dentro do Workspace na pasta **api** execute o seguinte comando para rodar as migrations e criar a tabela **pacientes**.
```
php artisan migrate
```
### Populando a tabela pacientes com uma planilha Excel
Dentro do diretório **/api/database/seeders/planilhas** se encontra a planilha utilizada como fonte de dados.

Para manter o nome da tabela como *pacientes* o arquivo foi renomeado de *lista_pacientes.xlsx* para *pacientes.xlsx*, além disso, os dados da planilha foram tratados para exibir 1 e 0 para os valores, respectivamente, SIM e NÃO das colunas **tem_comorbidades**  e **vacinado_covid19**.

Ainda no terminal, execute o seguinte comando para popular a base de dados:
```
php artisan db:seed --class=PacientesSeeder
```
### Endpoints/Rotas
- **api/pacientes** -> Retorna a lista com todos os pacientes
- **api/paciente/{id}** -> Retorna um paciente de acordo com o ID informado.

## Executando Frontend/APP
Ainda no ternminal vá a té a pasta **challenge**.
```
cd challenge
```
ou se ainda estiver dentro da pasta **api**...
```
cd ../challenge
```
Instale as dependências do projeto.
```
npm install ou yarn install
```

Execute o comando abaixo para iniciar o servidor do React.
```
yarn start
```
Obs: Caso o yarn não esteja instalado, o container deve perguntar se deseja instalar, basta dizer que sim digitando "y".

## Bibliotecas utilizadas - Backend
- Excel Seeder for Laravel
  - Permite alimentar o banco de dados através de arquivos CSV ou XLSX.
  - Utilizada para facilitar a inserção de dados através da planilha de pacientes fornecida
  - Link: https://github.com/bfinlay/laravel-excel-seeder

## Bibliotecas utilizadas - Frontend
Em uma aplicação React acamos por utilizar inúmeras bibliotecas. Para não fazer uma lista muito extensa, destaco as mais importantes abaixo.

- Materil-UI
  - Biblioteca com o Framework Material do Google
  - É a biblioteca que mais uso, por isso, acabei usando no automático, além disso ela tem muitos componentes fáceis de utilizar e além de um tema muito fácil de personalizar
  - As páginas principais foram feitas com o bootstrap (react-bootstrap), mas caso queria ver as páginas feitas com o Material-UI são as páginas *PacienteMUI.js* e *PacientesMUI.js*.
  - As rotas para essas páginas são */mui* e */mui/paciete/:id*
  - Link: https://material-ui.com/

- React Bootstrap
  - Biblioteca com o Framework Bootstrap
  - Utilizado pois foi solicitado no desafio fazer com Bootstrap.
  - Link: https://react-bootstrap.github.io/

- Axios
  - Biblioteca que facilita a comunicação com a API
  - Link: https://github.com/axios/axios

- React Redux
  - Além de ser solicitado no desafio é a melhor maneira de se trabalhar com os estados da aplicação
  - Link: https://react-redux.js.org/

- Redux Thunk
  - Facilita e muito o uso de middleware no Redux
  - Link: https://github.com/reduxjs/redux-thunk

#### Muito obrigado.
Foi muito legal realizar este pequeno desafio. Espero que gostem e que possamos trabalhar juntos neste projeto, para trocarmos experiências e evoluirmos cada vez mais.
Em caso de qualquer dúvida na hora de avaliar estou a disposição no e-mail [alexander@aldesenvolvimento.com.br](mailto:alexander@aldesenvolvimento.com.br).

Forte Abraço!!
