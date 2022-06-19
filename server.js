
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: process.env.MYSQL_URI, 
    port: 3306, 
    user: 'root',
    password: 'password', 
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

