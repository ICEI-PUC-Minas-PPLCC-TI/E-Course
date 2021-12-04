const express = require('express')
var bodyParser = require('body-parser');
const port = process.env.port || 3000

const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/form/cadastro/form.html')
})

app.post('/formPost', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})