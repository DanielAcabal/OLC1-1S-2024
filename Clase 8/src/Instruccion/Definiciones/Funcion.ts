import { tipoSimbolo } from "../../Contexto/Simbolo";
import { Contexto } from "../../Contexto/TablaSimbolo";
import { TipoDato } from "../../Expresion/Resultado";
import { Bloque } from "../Bloque";
import { Instruccion } from "../Instruccion";

export class Funcion extends Instruccion{
    private tipo:TipoDato
    private id:string
    private parametros:any[]
    private bloque:Bloque
    constructor(tipo:TipoDato,id:string,parametros:any[],bloque:Bloque ,linea:number,columna:number){
        super(linea,columna)
        this.tipo = tipo
        this.id = id
        this.parametros = parametros
        this.bloque = bloque
    }
    public interpretar(contexto: Contexto, consola: string[]): string | null {
        const global = contexto.obtenerGlobal()
        global.guardarSimbolo(this.id,this,this.tipo,tipoSimbolo.FUNCION)
        return null
    }
    public getParametros = () => this.parametros
    public getInstrucciones = () => this.bloque
}