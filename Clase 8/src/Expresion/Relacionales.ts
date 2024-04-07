import { Expresion } from "./Expresion";
import { OpRelacional, Resultado, TipoDato } from "./Resultado";

export class Relacional extends Expresion{
    public exp1:Expresion;
    public exp2:Expresion;
    public Operacion: OpRelacional;
    // En jison deben agregar las 2 expresiones, el tipo de expresión
    // Ustedes saben eso a través de su gramática
    constructor(e1:Expresion,e2:Expresion,op:OpRelacional,linea:number,columna:number){
        super(linea,columna)
        this.Operacion = op;
        this.exp1 = e1;
        this.exp2 = e2
    }
 
    public interpretar(): Resultado {
        const resultado1 = this.exp1.interpretar()
        const resultado2 = this.exp2.interpretar()
        console.log(resultado1,resultado2) 
        if(resultado1.tipo==TipoDato.NULO || resultado2.tipo==TipoDato.NULO){
            throw Error("Tipo de dato no se puede comparar")
        }
        if(
            (resultado1.tipo==TipoDato.NUMBER || resultado1.tipo==TipoDato.DOUBLE || resultado1.tipo==TipoDato.CHAR
            &&
            resultado2.tipo==TipoDato.NUMBER || resultado2.tipo==TipoDato.DOUBLE || resultado2.tipo==TipoDato.CHAR
            ) || (resultado1.tipo==TipoDato.BOOLEANO && resultado2.tipo==TipoDato.BOOLEANO)
        ){
            switch (this.Operacion){
                case OpRelacional.IGUAL:
                    return {tipo:TipoDato.BOOLEANO,valor:resultado1.valor==resultado2.valor}
                case OpRelacional.DISTINTO:
                    return {tipo:TipoDato.BOOLEANO,valor:resultado1.valor!=resultado2.valor}
                case OpRelacional.MENOR:
                    return {tipo:TipoDato.BOOLEANO,valor:resultado1.valor<resultado2.valor}
                case OpRelacional.MENORIGUAL:
                    return {tipo:TipoDato.BOOLEANO,valor:resultado1.valor<=resultado2.valor}
                case OpRelacional.MAYOR:
                    return {tipo:TipoDato.BOOLEANO,valor:resultado1.valor>resultado2.valor}
                case OpRelacional.MAYORIGUAL:
                    return {tipo:TipoDato.BOOLEANO,valor:resultado1.valor>=resultado2.valor}
            }
        }
            return {tipo:TipoDato.NULO,valor:null}

    }

}