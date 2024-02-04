/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.analizadorlexico;

/**
 *
 * @author Carlos Perez
 */
class Token {
    private String Id ="";
    private String lexema ="";
    private Integer fila = 0;
    private Integer columna =0;

    public Token(String Id, String lexema, Integer fila, Integer columna) {
        this.Id = Id;
        this.lexema = lexema;
        this.fila= fila;
        this.columna = columna;
    }


    public String getId() {
        return Id;
    }

    public void setId(String Id) {
        this.Id = Id;
    }

    public String getLexema() {
        return lexema;
    }

    public void setLexema(String lexema) {
        this.lexema = lexema;
    }

    public Integer getFila() {
        return fila;
    }

    public void setFila(Integer fila) {
        this.fila = fila;
    }

    public Integer getColumna() {
        return columna;
    }

    public void setColumna(Integer columna) {
        this.columna = columna;
    }

    @Override
    public String toString() {
        return "Token{" + "Id=" + Id + ", lexema=" + lexema + ", fila=" + fila + ", columna=" + columna + '}';
    }
    
}
