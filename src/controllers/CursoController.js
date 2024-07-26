const Curso = require('../models/Curso')

class CursoController {
    async criar(request, response) {
        try {
            const dados = request.body

            if(!dados.nome || !dados.duracao){
                return response.status(400).json({mensagem: 'Os campos nome e duração são obrigatório!'})
            }

            const curso = await Curso.create(dados)
            // equivale ao INSERT INTO

            console.log(curso)
            response.status(201).json(curso)

        } catch(error) {
            response.status(500).json({mensagem: 'Houve um erro ao cadastrar o curso ', error})
        }
    }

    async listarTodos(request, response){
        try {
            const cursos = await Curso.findAll()
            response.json(cursos)
        } catch(error) {
            response.status(500).json({mensagem: 'Houve um erro ao listar os dados ', error})
        }
    }
}

module.exports = new CursoController
