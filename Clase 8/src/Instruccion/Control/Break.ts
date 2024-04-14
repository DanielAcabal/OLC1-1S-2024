import { Contexto } from "../../Contexto/TablaSimbolo";
import { Instruccion } from "../Instruccion";

export class Break extends Instruccion{

    constructor(linea:number,columna:number){
        super(linea,columna)
    }
    public interpretar(contexto: Contexto, consola: string[]): null | string {
        return "break"
    }
}