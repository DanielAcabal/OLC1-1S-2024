/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.analizadorlexico;

import java.io.BufferedReader;
import java.io.FileReader;

/**
 *
 * @author Carlos Perez
 */
public class Archivo {
    public String ruta = "";
    public String Texto = "";
    public Archivo(String ruta){
        this.ruta = ruta;
        this.Texto = this.leer(this.ruta) +"#";
    }
    public String leer (String ruta){
        try (FileReader fr = new FileReader(ruta)) {
         BufferedReader br = new BufferedReader(fr);
         String texto = "";
         // Lectura del fichero
         String linea;
         while((linea=br.readLine())!=null)
             texto += linea+'\n';
         return texto;
      }
      catch(Exception e){
         e.printStackTrace();
      }
        return "";
    }

    public String getRuta() {
        return ruta;
    }

    public void setRuta(String ruta) {
        this.ruta = ruta;
    }

    public String getTexto() {
        return Texto;
    }

    public void setTexto(String Texto) {
        this.Texto = Texto;
    }
    
}
