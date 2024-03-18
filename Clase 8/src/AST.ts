import { Expresion } from "./Expresion/Expresion";

export class AST {
    public instrucciones: Expresion[]
    constructor(instrucciones: Expresion[]){
        this.instrucciones = instrucciones
    }

    public Ejecutar(){
       // Primera pasada
       this.instrucciones.forEach(instruccion => {
            const result = instruccion.interpretar() 
            console.log(result)
       });
    }
}