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

    async listarUm(request, response){
        try {
            const id = request.params.id
            const curso = await Curso.findByPk(id) //SELECT * FROM cursos WHERE id=...
            
            if(!curso){  //Se não encontrou curso com esse id
                return response.status(404).json({mensagem: 'Não foi encontrado dados correspondentes'})
            }

            response.json(curso)

        } catch(error) {
            response.status(500).json({mensagem: 'Houve um erro ao listar os dados'})
        }
    }

    async deletar(request, response){
        try {
            const id = request.params.id
            const curso = await Curso.findByPk(id) //SELECT * FROM cursos WHERE id=...
            
            if(!curso){  //Se não encontrou curso com esse id
                return response.status(404).json({mensagem: 'Não foi encontrado dados correspondentes'})
            }

            await curso.destroy()  //deletar
            response.status(204).json()

        } catch(error) {
            response.status(500).json({mensagem: 'Erro ao deletar'})
        }
    }

    async atualizar(request, response){
        try {
            const id = request.params.id            
            const curso = await Curso.findByPk(id)

            if(!curso){  //Se não encontrou curso com esse id
                return response.status(404).json({mensagem: 'Não foi encontrado dados correspondentes'})
            }

            const {nome, duracao} = request.body
            curso.nome = nome
            curso.duracao = duracao
            await curso.save()

            return response.json(curso)

        } catch(error) {
            response.status(500).json({mensagem: 'Erro ao atualizar'})
        }
    }
}

module.exports = new CursoController
