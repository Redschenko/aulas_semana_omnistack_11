const connection = require('../database/connection');


module.exports = {
    async create(request, response) {
        const { id } = request.body;
    
        //await = aguardar a execução do comando. necessário o asyng
        const ong = await connection('ongs')
            .where('id', id)
            .select('nome')
            .first();

        if(!ong){
            return response.status(400).json({ error: "Cadastro nao encontrado para este ID (KB 2003270056)" })         
        }else{
            return response.json(ong); 
        }
    }
}