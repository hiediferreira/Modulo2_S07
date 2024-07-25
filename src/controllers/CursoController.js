const Curso = require('../models/Curso')

class CursoController {
    async criar(request, response) {
        try {
            const dados = request.body
            //duração em horas

            if(!dados.nome || !dados.duracao){
                return response.status(400).json({mensagem: 'Os campos nome e duração são obrigatório!'})
            }

            const curso = await Curso.create(dados)
            // equivale ao INSERT INTO

            console.log(curso)
            response.status(201).json({mensagem: 'Criado com sucesso!'})

        } catch(error) {
            response.status(500).json({mensagem: 'Houve um erro ao cadastrar o curso ', error})
        }
    }
}


/*
Desenvolva uma rota POST com o endpoint ‘/cursos’ capaz de receber, no corpo da requisição, o nome do curso e sua duração em horas. Em seguida, essa rota deve retornar o objeto do curso recém-criado no banco de dados.

Retorne um status code 201 na resposta da requisição. Além disso, valide as informações recebidas no body da requisição. Caso haja algum dado inválido, retorne um status code 400 contendo o motivo do erro.
*/

module.exports = new CursoController
