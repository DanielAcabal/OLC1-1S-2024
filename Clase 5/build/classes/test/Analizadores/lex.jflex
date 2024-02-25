
package test.analizadores;
import java_cup.runtime.Symbol;
import Errores.Error_;
import static test.Test.lista_errores;

%%
%class Scanner 
//Nombre de la clase que genera JFlex
%public // Para tener acceso desde otros paquetes
%line // Para registrar las líneas
%char // Llevar un conteo de caracteres
%cup // Habilita la integración con Cup
%unicode // Reconocimiento de caracteres unicode
%ignorecase // Omite el case sensitive, mayúsculas y minúsculas son iguales

%init{ //Constructor del analizador
    yyline = 1; 
    yycolumn=1;
%init}

%column
// Expresiones regulares
WHITE = [ \r\t\n]+
ENTERO = [0-9]+
DECIMAL = {ENTERO}\.{ENTERO} 

%% //Creación de tokens
// Aquí puede ir código de Java

"-"  {return new Symbol(sym.MINUS,yyline,yycolumn, yytext());}
"+"  {return new Symbol(sym.ADD,yyline,yycolumn, yytext());}
"*"  {return new Symbol(sym.TIMES,yyline,yycolumn, yytext());}
"/"  {return new Symbol(sym.DIV,yyline,yycolumn, yytext());}

{WHITE}   {}
{ENTERO}    {return new Symbol(sym.ENTERO,yyline,yycolumn, yytext());}
{DECIMAL}   {return new Symbol(sym.DECIMAL,yyline,yycolumn, yytext());}

. {
    //System.out.println("Lexical error: "+yytext()+" linea: "+yyline+" columna: "+yycolumn);
    Error_ nuevoError = new Error_(yyline,yycolumn,yytext(),true);
    lista_errores.add(nuevoError);
    //System.out.println(nuevoError.toString());
}
