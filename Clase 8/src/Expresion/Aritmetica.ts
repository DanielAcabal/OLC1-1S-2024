import { Expresion } from "./Expresion";
import { OpAritmetica, Resultado,TipoDato } from "./Resultado";

export class Aritmetica extends Expresion{
    public exp1:Expresion;
    public exp2:Expresion;
    public Operacion: OpAritmetica;
    // En jison deben agregar las 2 expresiones, el tipo de expresión
    // Ustedes saben eso a través de su gramática
    constructor(e1:Expresion,e2:Expresion,op:OpAritmetica,linea:number,columna:number){
        super(linea,columna)
        this.Operacion = op;
        this.exp1 = e1;
        this.exp2 = e2
    }
    public interpretar(): Resultado {
        // Ejecutamos los noterminales
        const resultadoIzq = this.exp1.interpretar()
        const resultadoDer = this.exp2.interpretar()
        // Lógica del intérprete
        // Comparamos el tipo de operación
        if (this.Operacion == OpAritmetica.SUMA){
            return {valor: resultadoIzq.valor+resultadoDer.valor,tipo:TipoDato.NUMBER}
        } else if (this.Operacion == OpAritmetica.RESTA){
            return {valor: resultadoIzq.valor-resultadoDer.valor,tipo:TipoDato.NUMBER}
        } else if (this.Operacion == OpAritmetica.PRODUCTO){
            return {valor: resultadoIzq.valor*resultadoDer.valor,tipo:TipoDato.NUMBER}
        } else if (this.Operacion == OpAritmetica.DIVISION){
            return {valor: resultadoIzq.valor/resultadoDer.valor,tipo:TipoDato.NUMBER}
        }
        return {valor:null,tipo:TipoDato.NULO}
    }
}