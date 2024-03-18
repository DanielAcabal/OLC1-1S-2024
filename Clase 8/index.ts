const parser = require("../Gramatica/gramatica")

function main (){
    try {
        const entrada = "EXEC 11+2*5/3; EXEC 1+1;"
        const ast = parser.parse(entrada)
        ast.Ejecutar()    
        console.log("Análisis finalizado 2")
    } catch (error) {
       console.error(error) 
    }

}

main()