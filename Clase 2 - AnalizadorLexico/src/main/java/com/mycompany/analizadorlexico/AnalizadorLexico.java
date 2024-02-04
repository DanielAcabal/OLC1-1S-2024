/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.analizadorlexico;

import java.util.ArrayList;

/**
 *
 * @author Carlos Perez
 */

/*
    PALABRA               [a-zA-Z]+ = L+
    Números Enteros       [0-9]+ = D+
    Números decimales     Entero.Entero
    Símbolos aritméticos  + = M
 */
public class AnalizadorLexico {

    public static void main(String[] args) {
        Archivo Entrada = new Archivo("C:\\USAC\\PF\\LAB\\OLC1-1S-2024\\Clase 2 - AnalizadorLexico\\src\\main\\java\\com\\mycompany\\analizadorlexico\\Entrada.txt");
        System.out.println(Entrada.Texto);
        char[] caracteres = Entrada.Texto.toCharArray();
        Integer estado = 0;
        String Lexema = "";
        Integer i = 0;
        Integer fila = 0;
        Integer columna = 0;
        ArrayList tokens = new ArrayList();
        while (i < caracteres.length) {
            String actual = caracteres[i] + "";
            switch (estado) {
                case 0 -> {
                    System.out.println("Estado 0");
                    if (Character.isLetter(actual.charAt(0))) { // Si ingresan letras
                        estado = 1;
                        i++;
                        columna++;
                        Lexema += actual;
                    } else if (Character.isDigit(actual.charAt(0))) {// Si encuentra números
                        estado = 2;
                        i++;
                        columna++;
                        Lexema += actual;
                    } else if ('+' == actual.charAt(0)) { // Si encuentra el símbolo +
                        estado = 3;
                        i++;
                        columna++;
                        Lexema += actual;
                    } else if ('\n' == actual.charAt(0)) { // Si encuentra el símbolo \n 
                        columna = 0;
                        fila++;
                        i++;
                    } else if (' ' == actual.charAt(0)) { // Si encuentra el símbolo un espacio
                        columna++; 
                        i++;
                    } else if ('#' == actual.charAt(0)) { // Si encuentra el caracter de finalización
                        System.out.println("=======Análisis Terminado=======");
                        i++;
                    } else {//Error léxico
                        System.out.println("Error Lexico");
                    }
                    break;
                }
                case 1 -> {
                    System.out.println("Estado 1");
                    if (Character.isLetter(actual.charAt(0))) { // Si encuentra una letra
                        estado = 1;
                        i++;
                        columna++;
                        Lexema += actual;
                    } else {
                        // Encuentra otro símbolo, por tanto, ser verifica el lexema
                        // En este caso se pueden verificar Palabras reservadas.
                        // Crear token
                        Token nuevo = new Token("Mayuscula", Lexema, fila, columna);
                        tokens.add(nuevo); // Añadir a la lista
                        // Regresar al estado inicial
                        estado = 0;
                        Lexema = "";
                    }
                    break;
                }
                case 2 -> {
                    System.out.println("Estado 2");
                    if (Character.isDigit(actual.charAt(0))) { // Si es número
                        estado = 2;
                        columna++;
                        Lexema += actual;
                        i++;
                    } else if ('.' == actual.charAt(0)) { // Si es un punto
                        estado = 4;
                        columna++;
                        Lexema += actual;
                        i++;
                    } else  if (' ' == actual.charAt(0)) { // Si es un punto
                        // Encuentra otro símbolo, por tanto, ser verifica el lexema
                        // Crear token
                        Token nuevo = new Token("Entero", Lexema, fila, columna);
                        tokens.add(nuevo);
                        // Regresamos al estado inicial
                        estado = 0;
                        Lexema = "";
                        i++;
                    }
                    else {
                        System.out.println("Error lexico");
                    }
                    break;
                }
                case 3 -> {
                    // Este es un estado final, sin transición, por tanto, solo se debe crear el token
                    System.out.println("Estado 3");
                    // Crear token 
                    Token nuevo = new Token("Suma", Lexema, fila, columna);
                    tokens.add(nuevo);
                    // Regresamos al estado inicial
                    estado = 0;
                    Lexema = "";
                    break;
                }
                case 4 -> {
                    System.out.println("Estado 4");
                    if (Character.isDigit(actual.charAt(0))) { // Si es número
                        estado = 4;
                        columna++;
                        Lexema += actual;
                        i++;
                    } else {
                        // Encuentra otro símbolo, por tanto, ser verifica el lexema
                        // Crear token
                        Token nuevo = new Token("Decimal", Lexema, fila, columna);
                        tokens.add(nuevo);
                        // Regresamos al estado inicial
                        estado = 0;
                        Lexema = "";
                    }
                }
            }
        }
        // Mostramos la lista de tokens
        System.out.println("Lista de tokens:");
        for (int j = 0; j < tokens.size(); j++) {
            System.out.println(tokens.get(j).toString());
        }
    }
}
