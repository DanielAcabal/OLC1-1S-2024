import { Request, Response } from "express"

const parser = require("../Gramatica/gramatica")

function interprete(contenido:string){
    try {
        const ast = parser.parse(contenido)
        ast.Ejecutar()    
        console.log("Análisis finalizado 2")
        return ast.getConsola()
    } catch (error) {
       console.error(error) 
    }

}

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.post('/interpretar', (req:Request, res:Response) => {
  const contenido = req.body.contenido
  const interpretado = interprete(contenido)
  res.json({resultado:interpretado})
})

app.get('/', (req:Request, res:Response) => {
    res.send("Hola mundo")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})