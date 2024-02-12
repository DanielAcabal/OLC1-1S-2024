/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package test;

import java.io.BufferedReader;
import java.io.StringReader;
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
    public static void main(String[] args) {
        try {
            String text = "132.3+2*9*3+1";
            Scanner scanner = new Scanner(new BufferedReader(new StringReader(text)));
            Parser parser = new Parser(scanner);
            parser.parse();
        } catch (Exception e) {
          //  System.out.println(e);
          e.printStackTrace();
        }
    }
    
}
