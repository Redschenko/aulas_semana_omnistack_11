/**
 * npm instalar um pacote
 * npx executa um pacote instalado
 */

const express = require('express');

//implementa a seguran�a no backend 
const cors = require('cors');


//importando um arquivo. Necess�rio estar exportado no arquivo fonte
const routes = require('./routes');

const app = express();


app.use(cors());

//indica que ser� utilizado objetos json para requisi��es Body
app.use(express.json());

//usando o arquivo de rotas
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * M�todos HTTP:
 * GET: Buscar/listar uma informa��o do back-end
 * POST: Criar uma informa��o do back-end
 * PUT: Alterar uma informa��o do back-end
 * DELETE: Deletar uma informa��o do back-end
 * 
 */

/**
 * Tipos de Par�metros:
 * 
 * Query Params (query): Par�metros nomeados enviados na rota ap�s "?" (Usado para filtros, pagina��o). Semelhante a querystring
 * Exemplo
 * 
     app.post('/users', (request,response) => {
       // return response.send('Hello World');
       const params = request.query;
       
       //Para testar
       //http://localhost:3333/users?name=Rodrigo
       console.log(params);
       
       return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Rodrigo de Oliveira'
       });
    
    });
 * 
 * 
 * Route Params (params): Par�metros utilizados para identificar  recursos
 Exemplo

    app.post('/users/:id', (request,response) => {
       // return response.send('Hello World');
       const params = request.params;
       
       //Para testar
       //http://localhost:3333/users/10
       console.log(params);

       return response.json({

       evento: 'Semana OmniStack 11.0',
       aluno: 'Rodrigo de Oliveira'
       });

    });
 *
 * Request Body (body): Corpo da requisi��o, utilizado para criar ou alterar recursos
 * 
 Exemplo

 app.post('/users', (request,response) => {
    // return response.send('Hello World');
    const body = request.body;
    
    
    // Para testar
    // http://localhost:3333/users
    //   {
    //   "nome": "Rodrigo de Oliveira",
    //   "idade": 35
    //   }
    //
    console.log(body);

    return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Rodrigo de Oliveira'
    });

 });
 */


/**
 * SQL: MySQL, PostgreSQL, SQLite, Oracle, MS SQL Server
 * NOSQL: MongoDB, CouchDB, etc 
 */

/**
 * Formas de usar SQLite
 * 
 * Drivers: SELECT * FROM users
 * Query Builder: table('users') 
 */



app.listen(3333);