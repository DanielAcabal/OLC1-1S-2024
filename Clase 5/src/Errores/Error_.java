/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Errores;

/**
 *
 * @author Carlos Perez
 */
public class Error_ {

    private int linea;
    private int columna;
    private String lexema;
    private boolean lexico; // True es lexico , false es error sintactico
  
    public Error_(int linea, int columna, String lexema, boolean tipo) {
        this.columna = columna;
        this.linea = linea;
        this.lexema = lexema;
        this.lexico = tipo;
    } 

    public int getLinea() {
        return linea;
    }

    public void setLinea(int linea) {
        this.linea = linea;
    }

    public int getColumna() {
        return columna;
    }

    public void setColumna(int columna) {
        this.columna = columna;
    }

    public String getLexema() {
        return lexema;
    }

    public void setLexema(String lexema) {
        this.lexema = lexema;
    }

    public boolean isLexico() {
        return lexico;
    }

    public void setLexico(boolean lexico) {
        this.lexico = lexico;
    }

    @Override
    public String toString() {
        return "Error_{" + "linea=" + linea + ", columna=" + columna + ", lexema=" + lexema + ", tipo=" + (lexico?"Lexico":"Sintactico") + '}';
    }

  

}
