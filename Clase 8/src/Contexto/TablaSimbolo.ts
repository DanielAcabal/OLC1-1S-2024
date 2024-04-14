import { TipoDato } from "../Expresion/Resultado";
import { Simbolo, tipoSimbolo } from "./Simbolo";

export class Contexto {
    private tablaSimbolos: Map<String,Simbolo>
    private padre: Contexto | null

    constructor(padre:Contexto | null){
        this.padre = padre;
        this.tablaSimbolos = new Map<String,Simbolo>
    }

    public guardarSimbolo(id:string,valor:Object,tipo:TipoDato,tipoSimbolo:tipoSimbolo){
        const existe = this.tablaSimbolos.has(id);
        if (!existe){
            this.tablaSimbolos.set(id, new Simbolo(id,valor,tipo,tipoSimbolo))
            console.log("Variable guardada")
            return 
        }
        throw new Error("La variable ya fue declarada")
    }

    public obtenerVariable(id:string):Simbolo | undefined{
        let contexto_actual = this as Contexto | null
        while (contexto_actual!=null){
        const existe = contexto_actual.tablaSimbolos.has(id);
        if (existe){
            // Obtenemos valor y retornamos
            return contexto_actual.tablaSimbolos.get(id);
        }
            // Siguiente contexto
            contexto_actual = contexto_actual.padre 
        }
        return undefined
    }

    public actualizarSimbolo(id:string,valor:Simbolo){
        this.tablaSimbolos.set(id,valor)
    }
}