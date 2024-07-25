const { Router } = require('express')

//Importando as nossas rotas
const cursosRoutes = require('./cursos.routes')

const routes = new Router()

routes.use('/cursos', cursosRoutes)

module.exports = routes