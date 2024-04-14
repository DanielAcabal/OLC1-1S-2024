import { Contexto } from "../Contexto/TablaSimbolo";

export abstract class  Instruccion{
    public line: number;
    public column: number; 
    // Esta clase siempre pedirá línea y columna
    constructor(line: number, colum:number){
        this.line = line;
        this.column = colum;
    }
    // Método que siempre debe ejecutarse en todos los objetos que hereda
    public abstract interpretar(contexto:Contexto,consola:string[]):null | string
        
 }