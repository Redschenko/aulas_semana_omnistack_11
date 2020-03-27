/**
 * npm instalar um pacote
 * npx executa um pacote instalado
 */

const express = require('express');

//implementa a segurança no backend 
const cors = require('cors');


//importando um arquivo. Necessário estar exportado no arquivo fonte
const routes = require('./routes');

const app = express();


app.use(cors());

//indica que será utilizado objetos json para requisições Body
app.use(express.json());

//usando o arquivo de rotas
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 * 
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params (query): Parâmetros nomeados enviados na rota após "?" (Usado para filtros, paginação). Semelhante a querystring
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
 * Route Params (params): Parâmetros utilizados para identificar  recursos
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
 * Request Body (body): Corpo da requisição, utilizado para criar ou alterar recursos
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