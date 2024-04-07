import { Instruccion } from "./Instruccion";

export class Bloque extends Instruccion{
    instrucciones: Instruccion[]

    constructor(instrucciones: Instruccion[]){
        super(0,0)
        this.instrucciones = instrucciones
    }

    public interpretar(consola: string[]): null {
        this.instrucciones.forEach(instruccion => {
            instruccion.interpretar(consola)
       });
       return null;
    }
}