
export type Resultado = {
    valor: any,
    tipo: TipoDato
}

export enum TipoDato{
    NUMBER,
    DOUBLE,
    NULO
}
export enum OpAritmetica{
    SUMA, RESTA, PRODUCTO,DIVISION
}