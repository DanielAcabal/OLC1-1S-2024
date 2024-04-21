import { Contexto } from "../Contexto/TablaSimbolo";
import { Instruccion } from "./Instruccion";
import { Llamada } from "./Llamada";

export class Execute extends Instruccion {
    constructor(private llamada:Llamada,linea:number,columna:number){
        super(linea,columna)
    }
    public interpretar(contexto: Contexto, consola: string[]): string | null {
        this.llamada.interpretar(contexto,consola)
        return null
    }
}