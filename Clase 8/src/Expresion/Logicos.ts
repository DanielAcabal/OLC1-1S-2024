import { Expresion } from "./Expresion";
import { OpLogico, Resultado, TipoDato } from "./Resultado";

export class Logico extends Expresion{
    
    public exp1:Expresion;
    public exp2:Expresion;
    public Operacion: OpLogico;
    // En jison deben agregar las 2 expresiones, el tipo de expresión
    // Ustedes saben eso a través de su gramática
    constructor(e1:Expresion,e2:Expresion,op:OpLogico,linea:number,columna:number){
        super(linea,columna)
        this.Operacion = op;
        this.exp1 = e1;
        this.exp2 = e2
    }
 
    public interpretar(): Resultado {
        let resultado1 = null
        if (this.Operacion!=OpLogico.NOT)
            resultado1 =  this.exp1.interpretar()
        const resultado2 = this.exp2.interpretar() 

        if (this.Operacion== OpLogico.AND){
            if(resultado1?.tipo==TipoDato.BOOLEANO && resultado2.tipo==TipoDato.BOOLEANO)
                return {tipo:TipoDato.BOOLEANO,valor:resultado1.valor&&resultado2.valor}
        }else if (this.Operacion== OpLogico.OR){
            if(resultado1?.tipo==TipoDato.BOOLEANO && resultado2.tipo==TipoDato.BOOLEANO)
                return {tipo:TipoDato.BOOLEANO,valor:resultado1.valor||resultado2.valor}
        }else if (this.Operacion== OpLogico.NOT){
            if(resultado2.tipo==TipoDato.BOOLEANO)
                console.log(resultado2)
                return {tipo:TipoDato.BOOLEANO,valor:!resultado2.valor}
        }
        return {tipo:TipoDato.NULO,valor:null}
       }
}