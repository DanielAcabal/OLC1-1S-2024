import { Contexto } from "../../Contexto/TablaSimbolo";
import { Expresion } from "../../Expresion/Expresion";
import { TipoDato } from "../../Expresion/Resultado";
import { Bloque } from "../Bloque";
import { Instruccion } from "../Instruccion";

export class FN_IF extends Instruccion{
    condicion: Expresion
    bloqueIf: Bloque
    bloqueElse: Bloque

    constructor(condicion:Expresion,bloqueIf:Bloque,bloqueElse:Bloque,linea:number,columna:number){
        super(linea,columna)
        this.condicion = condicion
        this.bloqueIf = bloqueIf
        this.bloqueElse  = bloqueElse
    }

    public interpretar(contexto:Contexto,consola: string[]): null | string {
        const condicion = this.condicion.interpretar(contexto)
        if (condicion.tipo!=TipoDato.BOOLEANO)
            throw Error("La condición no es booleana")
        if (condicion.valor){
            const retorno =  this.bloqueIf.interpretar(contexto,consola)
            console.log(retorno)
            if (retorno) return retorno
        }else{
            console.log("else")
            console.log({else:this.bloqueElse})
            const retorno = this.bloqueElse?.interpretar(contexto,consola)
            if (retorno) return retorno
        }
        return null
    }
}