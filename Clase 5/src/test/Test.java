/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package test;

import Errores.Error_;
import java.io.BufferedReader;
import java.io.StringReader;
import java.util.LinkedList;
import test.analizadores.Parser;
import test.analizadores.Scanner;

/**
 *
 * @author Carlos Perez
 */
public class Test {

    /**
     * @param args the command line arguments
     */
    public static LinkedList<Error_> lista_errores = new LinkedList<Error_>();
    
    public static void main(String[] args) {
        try {
            
            String text = "?%| 12 12 + +";
            Scanner scanner = new Scanner(new BufferedReader(new StringReader(text)));
            Parser parser = new Parser(scanner);
            parser.parse();
            System.out.println("Análisis terminado");
            for (Error_ arg : lista_errores) {
                System.out.println(arg.toString());
            }
        } catch (Exception e) {
          System.out.println(e);
          e.printStackTrace();
        }
    }
    
}
