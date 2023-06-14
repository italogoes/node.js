const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(3000)


app.get('/', (req, res) => {

    res.json({message: 'Api 2 criada com sucesso!'})

})

app.post('/criarProduto', (req, res) => {

    const name = req.body.name
    const price = req.body.price

    if(!name){
        res.status(422).json({message: 'O campo nome é obrigatório!!!'})
        return
    }

    if(!price){
        res.status(422).json({message: 'O campo preço é obrigatório!!!'})
        return
    }

    res.status(201).json({message: `O produto ${name} foi criado com sucesso!`})

})

