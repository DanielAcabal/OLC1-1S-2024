import { TipoDato } from "../Expresion/Resultado";

export class Simbolo {
    private id:string;
    private valor: Object;
    private tipo: TipoDato
    public tipoSimbolo: tipoSimbolo;

    constructor(id:string,valor:Object,tipo:TipoDato,tipoSimbolo:tipoSimbolo){
        this.id = id
        this.valor= valor
        this.tipo = tipo
        this.tipoSimbolo = tipoSimbolo
    }
    public obtenerValor():Object{
        return this.valor
    }
    public actualizarValor(valor:Object){
        this.valor = valor
    }
    public obtenertipoDato() {
        return this.tipo
    }

}

export enum tipoSimbolo {
    VARIABLE,
    FUNCION
}