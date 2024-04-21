import { tipoSimbolo } from "../Contexto/Simbolo";
import { Contexto } from "../Contexto/TablaSimbolo";
import { Expresion } from "./Expresion";
import { Resultado } from "./Resultado";

export class Acceso extends Expresion {
    id:string

    constructor(id:string,linea:number,columna:number){
        super(linea,columna)
        this.id = id
    }
    public interpretar(contexto:Contexto): Resultado {
        const simbolo = contexto.obtenerSimbolo(this.id)
        if(simbolo){
            if (simbolo.tipoSimbolo == tipoSimbolo.VARIABLE){
                const resultado = simbolo.obtenerValor() as Resultado
                return {valor:resultado.valor,tipo:resultado.tipo}
            }
            throw new Error("No es una variable")
        }
        throw new Error("No existe la variable")
    }
}