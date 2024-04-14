import { tipoSimbolo } from "../../Contexto/Simbolo";
import { Contexto } from "../../Contexto/TablaSimbolo";
import { Expresion } from "../../Expresion/Expresion";
import { TipoDato } from "../../Expresion/Resultado";
import { Instruccion } from "../Instruccion";

export class Declaracion extends Instruccion{
    tipo:TipoDato
    id:string
    expresion:Expresion

    constructor(tipo:TipoDato,id:string,expresion:Expresion,linea:number,columna:number){
        super(linea,columna)
        this.tipo = tipo
        this.id = id
        this.expresion = expresion
    }

    public interpretar(contexto:Contexto,consola: string[]): null {
       // Existe?
        const valor = this.expresion.interpretar(contexto)
        contexto.guardarSimbolo(this.id,valor,valor.tipo,tipoSimbolo.VARIABLE)
        return null
    }

}