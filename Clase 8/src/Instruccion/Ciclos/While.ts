import { Contexto } from "../../Contexto/TablaSimbolo";
import { Expresion } from "../../Expresion/Expresion";
import { TipoDato } from "../../Expresion/Resultado";
import { Bloque } from "../Bloque";
import { Instruccion } from "../Instruccion";

export class CWhile extends Instruccion{
    condicion: Expresion
    instrucciones: Bloque

    constructor(condicion:Expresion,instrucciones:Bloque,linea:number,columna:number){
        super(linea,columna)
        this.condicion = condicion
        this.instrucciones = instrucciones
    }
    public interpretar(contexto: Contexto, consola: string[]): null {
        let condicion = this.condicion.interpretar(contexto)    
        if (condicion.tipo != TipoDato.BOOLEANO) throw new Error("La condicion no es booleana")
        while(condicion.valor){
            // Se ejecutan las instrucciones
             const retorno = this.instrucciones.interpretar(contexto,consola)
             if (retorno=="break"){
                console.log("break")
                break;
             }
            // Se calcula la condicion
            condicion = this.condicion.interpretar(contexto)
        }
        return null
    }

}