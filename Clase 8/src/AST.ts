import { Contexto } from "./Contexto/TablaSimbolo";
import { Expresion } from "./Expresion/Expresion";
import { Instruccion } from "./Instruccion/Instruccion";

export class AST {
    public instrucciones: Instruccion[]
    public consola:string[]
    public contextoGlobal: Contexto
    constructor(instrucciones: Instruccion[]){
        this.instrucciones = instrucciones
        this.consola = []
        this.contextoGlobal = new Contexto(null)
    }

    public Ejecutar(){
       // Primera pasada
       this.instrucciones.forEach(instruccion => {
            instruccion.interpretar(this.contextoGlobal,this.consola)
       });
    }
    public getConsola(){
        console.log(this.consola)
        let salid = ""
        for (let index = 0; index < this.consola.length; index++) {
            salid += this.consola[index].toString();
        }
        console.log(salid)
        return salid
    }
}