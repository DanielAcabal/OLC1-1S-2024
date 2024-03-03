const parser = require("./Gramatica/gramatica")

function main (){
    try {
        const entrada = "EXEC 11+2*5/3; EXEC 1+1;"
        const resultado = parser.parse(entrada)
        console.log(resultado)
        console.log("Análisis finalizado")
    } catch (error) {
       console.error(error) 
    }

}

main()