# Desafio: Pacientes COVID-19

**Atenção, Dev!**

Antes de "meter a mão na massa", leia com atenção todas as instruções abaixo.


## Primeira Etapa - API (backend)
Você deve construir uma API REST com PHP LARAVEL que retorne os dados referentes aos dados de 10 pacientes.

Os dados de cada paciente são:

- Nome do Paciente
- Data de Nascimento
- Telefone
- Tem comorbidades?
- Já foi vacinado contra Covid-19?

Primeiramente os dados dos 10 pacientes devem ser cadastrados em uma tabela de banco de dados MariaDB (ou Mysql) através de uma SEEDER do LARAVEL, com base em um documento chamado **"lista_pacientes.xlsx"** que está disponível no diretório **"challenge"**.

Logo após, a API deve ser construída para a responder através de duas rotas: 
- Retorno de um Array com os dados de todos os pacientes;
- Retorno dos dados de um único paciente.

O retorno da consulta a API deve ser realizado em formato JSON e seguindo a estrutura abaixo:

```
{
    id: 1,
    nome: 'Maria Joaquina de Mendonça',
    data_nascimento: '1949-06-19'
    telefone: '21 6322-5698', 
    tem_comorbidades: true
    vacinado_covid19: true    
},
```

___
## Segunda Etapa - SPA (frontend)

Para consumir os dados da API, você deverá criar uma SPA em ReactJS e Bootstrap.
Esta SPA deverá conter duas rotas: 
- Page com tabela contendo todos os pacientes (nome, idade e telefone);
- Page com todos os dados de um único paciente.

Na **primeira rota**, cada linha da tabela deverá conter uma quarta coluna.
Dentro desta última coluna, deverá haver um botão com um link para a **segunda rota**, onde serão exibidos todos os dados daquele paciente (nome, data_nascimento, idade, telefone, tem comorbidades?, foi vacinado?).

**IMPORTANTE:** Antes de listar ou exibir os dados vindos da API, grave-os no estado global da SPA, usando o **Redux**, seguindo o seguinte estado inicial:

```
{
    pacientes: [...],
    pacienteSelecionado: {...}
},
```

___
## **O que vamos avaliar:**

- Desempenho;
- Manutenibilidade;
- Organização e clareza do código;
- Conhecimento ferramental;
- Aplicação de boas práticas.

___
## **Para finalizar...**
Se liga nessas informações importantes para o início e conclusão do desafio:

- Crie um **fork** e desenvolva a sua solução nele.
- Crie um **PROJECT.md** com a explicação de como devemos executar o projeto e o máximo de detalhes possível sobre o que foi feito e como foi feito (bibliotecas utilizadas, o porquê de utilizá-las, etc).
- Após concluir todas as tarefas, faça um **pull request**.
- Envie um E-mail para "**thiago.ferreira@cdts.fiocruz.br**" com o link do seu **pull request** e com o assunto "**challenge accepted**".

Caso tenha alguma dívida, entre em contato conosco também através do E-mail "**thiago.ferreira@cdts.fiocruz.br**".
___
### **Bom... Por enquanto é só isso tudo.**

Um excelente desafio e que a força esteja com você! o/
#### **Let's Go!**
