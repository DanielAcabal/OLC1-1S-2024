import { tipoSimbolo } from "../Contexto/Simbolo";
import { Contexto } from "../Contexto/TablaSimbolo";
import { Expresion } from "../Expresion/Expresion";
import { Funcion } from "./Definiciones/Funcion";
import { Instruccion } from "./Instruccion";

export class Llamada extends Instruccion{

    constructor(private id:string,private argumentos:Expresion[],linea:number,columna:number){
        super(linea,columna)
    }

    public interpretar(contexto: Contexto, consola: string[]): string | null {
       // 1. Obtener la función
       const simbolo = contexto.obtenerSimbolo(this.id)
       if (simbolo?.tipoSimbolo!=tipoSimbolo.FUNCION) throw new Error("Este id no es de una funcion")
       // Comparar parámetros - cantidad y tipo
       const funcion = simbolo.obtenerValor() as Funcion
       const global = contexto.obtenerGlobal()
       const contextoFuncion = new Contexto(global)

       if (this.argumentos.length!=funcion.getParametros().length) throw new Error("Verifique la cantidad de argumentos")

       funcion.getParametros().forEach((parametro,index)=>{
            const exp = this.argumentos[index].interpretar(contexto)
            if(exp.tipo!=parametro.tipo) throw new Error("Tipo de parámetro no coincide")
            // Declarar variable                
            contextoFuncion.guardarSimbolo(parametro.id,exp,exp.tipo,tipoSimbolo.VARIABLE)
    })
       // Ejecutar lista de instrucciones
       const instrucciones = funcion.getInstrucciones()
       instrucciones.interpretar(contextoFuncion,consola)
       return null
    }
}