import { Expresion } from "../Expresion/Expresion";
import { TipoDato } from "../Expresion/Resultado";
import { Instruccion } from "./Instruccion";

export class Print extends Instruccion{
    private expresion;
    private salto;
    constructor(expresion:Expresion,salto:string,linea:number,columna:number){
        super(linea,columna)
        this.expresion=expresion
        this.salto = salto
    }
    public interpretar(consola: string[]): null {
        const res = this.expresion.interpretar()
        if (res.tipo == TipoDato.BOOLEANO){
            res.valor == res.valor?"true":"false"
        }
        if (this.salto){
        consola.push(res.valor+"\n")
        }
        else{
        consola.push(res.valor+"")
        }
        return null
    }
}