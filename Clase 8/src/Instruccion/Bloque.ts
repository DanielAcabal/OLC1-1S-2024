import { Contexto } from "../Contexto/TablaSimbolo";
import { Instruccion } from "./Instruccion";

export class Bloque extends Instruccion{
    instrucciones: Instruccion[]

    constructor(instrucciones: Instruccion[]){
        super(0,0)
        this.instrucciones = instrucciones
    }

    public interpretar(contexto:Contexto,consola: string[]): null | string {
        const nuevoContexto = new Contexto(contexto)
        for (const instruccion of this.instrucciones) {
            const retorno = instruccion.interpretar(nuevoContexto,consola)
            console.log({retorno})
            if(retorno)  return retorno
        }
       return null;
    }
}