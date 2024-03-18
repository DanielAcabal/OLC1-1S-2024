import { Resultado } from "./Resultado";

export abstract class  Expresion{
    public line: number;
    public column: number; 
    // Esta clase siempre pedirá línea y columna
    constructor(line: number, colum:number){
        this.line = line;
        this.column = colum;
    }
    // Método que siempre debe ejecutarse en todos los objetos que hereda
    public abstract interpretar():Resultado
        
 }