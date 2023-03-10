const express = required('express')
const routes = express.Router()

let db = [

    { '1': { nome: 'cliente', idade: '20'} },
    { '1': { nome: 'cliente', idade: '20'} },
    { '1': { nome: 'cliente', idade: '20'} }

]
// buscar dados
routes.get('/', (req, res) => {
    return res.json(db)
})

// inserir dados
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

        db.push(body)
        return res.json(body)
    
})

module.exports = routes