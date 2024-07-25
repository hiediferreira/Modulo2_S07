const { Router } = require('express')

const Curso = require('../models/Curso')

const cursosRoutes = new Router()

/* 
Desenvolva uma rota POST com o endpoint ‘/cursos’ capaz de receber, no corpo da requisição, o nome do curso e sua duração em horas. Em seguida, essa rota deve retornar o objeto do curso recém-criado no banco de dados.

Retorne um status code 201 na resposta da requisição. Além disso, valide as informações recebidas no body da requisição. Caso haja algum dado inválido, retorne um status code 400 contendo o motivo do erro.
*/

cursosRoutes.post('/', async(request, response) => {
    try {
        const {nome, duracao} = request.body
        //duração em horas
        if(!nome || !duracao){
            return response.status(400).json({mensagem: 'Os campos nome e duração são obrigatório!'})
        }
        const curso = await Curso.create({
            nome,
            duracao
        })

        console.log(curso)
        return response.status(201).json({mensagem: 'Criado com sucesso!'})
    } catch(error) {
        response.status(500).send('Não foi possível cadastrar')
    }
})

module.exports = cursosRoutes