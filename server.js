const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    // port: 3307, //para usar con docker-compose. cambio puerto asi no pisa el mysql local
    user: 'root',
    password: '6u1d0Mysql',
    // password: 'password', //para usar con docker-compose
    database: 'clienteservidor'

}

// middlewares-------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// routes------------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/api', routes)

// server running----------------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

