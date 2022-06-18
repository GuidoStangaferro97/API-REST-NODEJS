const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM libros', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO libros set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('libro registrado correctamente')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM libros WHERE idLibros = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('libro eliminado correctamente')
        })
    })
})



module.exports = routes
