
export type Resultado = {
    valor: any,
    tipo: TipoDato
}

export enum TipoDato{
    NUMBER = 0,
    DOUBLE = 1,
    BOOLEANO = 2,
    CHAR = 3,
    STRING = 4,
    NULO,
}
export enum OpAritmetica{
    SUMA, RESTA, PRODUCTO,DIVISION
}