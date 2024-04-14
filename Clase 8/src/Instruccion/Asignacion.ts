import { tipoSimbolo } from "../Contexto/Simbolo";
import { Contexto } from "../Contexto/TablaSimbolo";
import { Expresion } from "../Expresion/Expresion";
import { Instruccion } from "./Instruccion";

export class Asignacion extends Instruccion{
    id:string
    expresion:Expresion
    constructor(id:string,expresion:Expresion,linea:number,columna:number){
        super(linea,columna)
        this.id = id
        this.expresion = expresion
    }
    public interpretar(contexto: Contexto, consola: string[]): null {
        const simbolo = contexto.obtenerVariable(this.id)
        if (simbolo){
            if (simbolo.tipoSimbolo == tipoSimbolo.VARIABLE){
                const nuevoValor = this.expresion.interpretar(contexto)
                simbolo.actualizarValor(nuevoValor)
                contexto.actualizarSimbolo(this.id,simbolo)
                return null
            }
            throw new Error("No es tipo variable")
        }
        throw new Error("La variable no existe")
    }
}