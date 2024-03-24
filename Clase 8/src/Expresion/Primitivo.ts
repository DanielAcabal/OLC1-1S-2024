import { Expresion } from "./Expresion";
import { TipoDato, Resultado } from "./Resultado";

export class Primitivo extends Expresion{
    exp1:string;
    tipo: TipoDato;
    // Estos parámetros deben pasarlo en el archivo de JISON
    // En jison ustedes saber qué tipo de dato es el terminal según su gramática de expresiones
    constructor(e1:string,tipo:TipoDato,linea:number,columna:number){
        super(linea,columna)
        this.exp1 = e1;
        this.tipo = tipo;
    }
    interpretar(): Resultado {
        // Ejecutamos los noterminales
        // Comparamos el tipo
        if (TipoDato.NUMBER == this.tipo || TipoDato.DOUBLE == this.tipo){
            //Convertimos el tipo para que al ejecutar el valor ya tenga el tipo correcto
            //con this.tipo no nos preocupamos en verificar si es number o double
            return {valor:Number(this.exp1), tipo:this.tipo}
        }else if(TipoDato.BOOLEANO == this.tipo) {
            return {valor:this.exp1.toLowerCase()=="true"?true:false, tipo:this.tipo}
        }else if(TipoDato.STRING == this.tipo) {
            return {valor:this.exp1.toString(), tipo:this.tipo}
        }

        // en caso que no sea ninguno
        return {valor:null,tipo:TipoDato.NULO}
    }
}