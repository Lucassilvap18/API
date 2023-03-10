const express = require('express')
const morgan = require('morgan') 
const cors = require('cors')
const bodyParser = require('body-parser')
const { json } = require('body-parser')
const routes = required('./config/routes')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false }))
app.use(express.json())
app.use(cors())
app.use('routes')

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

app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
} )