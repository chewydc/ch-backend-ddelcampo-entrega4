//-------------------------------------------------------------------
// Desafio Entregable N°4: API RESTfull
// Fecha de entrega tope: 01-10-21
// Alumno: Damian del Campo
//-------------------------------------------------------------------
const express = require('express')
const {routerProductos} = require("./router/productos")

const app = express()
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//-------------------------------------------------------------------
// Cargo los routers
app.use('/api/productos',routerProductos)

//-------------------------------------------------------------------
// Cargo el server
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
console.info(`Servidor HTTP escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
