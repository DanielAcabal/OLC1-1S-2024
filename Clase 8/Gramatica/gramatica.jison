%{
    // Importar librerías
    const {Aritmetica} = require("../dist/src/Expresion/Aritmetica");
    const {Relacional} = require("../dist/src/Expresion/Relacionales");
    const {Logico} = require("../dist/src/Expresion/Logicos");
    const {Primitivo} = require("../dist/src/Expresion/Primitivo");
    const {OpAritmetica,OpRelacional,OpLogico,TipoDato} = require("../dist/src/Expresion/Resultado");
    const {Print} = require("../dist/src/Instruccion/Print");
    const {Bloque} = require("../dist/src/Instruccion/Bloque");
    const {FN_IF} = require("../dist/src/Instruccion/Control/IF");
    const {AST} = require("../dist/src/AST");
%}

%lex // Inicia parte léxica

%options case-insensitive

%%

\s+                                 //ignora espacios
//Palabras reservadas
// Comentarios son con //

[0-9]+("."[0-9]+)\b     return 'DOUBLE';
[0-9]+\b                return 'NUMBER';

"EXEC"                  return 'EXEC';
"print"                 return 'PRINT';
"println"               return 'PRINTLN';
"true"                  return 'TRUE';
"false"                 return 'FALSE';
//Instrucciones de control
"if"                    return 'IF';
"else"                  return 'ELSE';
"{"                     return 'LLAVEIZQ';
"}"                     return 'LLAVEDER';

([a-zA-z])[a-zA-Z0-9_]* return 'ID';

// signos
"("                     return 'PARIZQ';
")"                     return 'PARDER';
// Aritmeticas
"+"                     return 'MAS';
"-"                     return 'RES';
"*"                     return 'MUL';
"/"                     return 'DIV';
";"                     return 'PYC';
// Relacionales
"=="                    return 'IGUAL';
"!="                    return 'DISTINTO';
"<="                    return 'MENORIGUAL';
"<"                     return 'MENOR';
">="                    return 'MAYORIGUAL';
">"                     return 'MAYOR';
"="                     return 'ASIGNACION';
//logicos
"&&"                    return 'AND';
"||"                    return 'OR';
"!"                     return 'NOT';
// Cadenas             "asdfasdfasf"
\"[^\"]*\"				{ yytext = yytext.substr(1,yyleng-2); return 'CADENA'; }

<<EOF>>                 return 'EOF';

.					   {    console.log(yylloc.first_line, yylloc.first_column,'Lexico',yytext);    }

// Finaliza parte de Léxica
/lex

// precedencia
%right 'NOT'
%left 'OR'
%left 'AND'
%left 'IGUAL','DISTINTO','MENOR','MENORIGUAL','MAYOR','MAYORIGUAL'
%left 'MAS', 'RES'
%left 'MUL','DIV'
%right UMINUS 

// Inicio de gramática
%start ini

// Parte sintáctica  - Definición de la gramática
%%

ini : instrucciones EOF { return new AST($1);}
;

instrucciones: instrucciones instruccion    {  $1.push($2); $$ = $1;}
            | instruccion                   { $$ =  [$1];}
;

instruccion: EXEC expresion PYC         { $$ =  $2;}
            | fn_print PYC               { $$ = $1;}
            | fn_if                     { $$ = $1;}
;
// Para sitetisar un dato, se utiliza $$
expresion: RES expresion %prec UMINUS   { $$ = new Aritmetica(new Primitivo(0,0,0),$2,OpAritmetica.RESTA,0,0);} 
        | expresion MAS expresion      { $$ = new Aritmetica($1,$3,OpAritmetica.SUMA,0,0);}
        | expresion RES expresion       { $$ = new Aritmetica($1,$3,OpAritmetica.RESTA,0,0);}
        | expresion MUL expresion       { $$ =  new Aritmetica($1,$3,OpAritmetica.PRODUCTO,0,0);}
        | expresion DIV expresion       { $$ =  new Aritmetica($1,$3,OpAritmetica.DIVISION,0,0);}
        | relacionales                   { $$ = $1;}
        | logicos                   { $$ = $1;}
        | NUMBER                        { $$ = new Primitivo($1,TipoDato.NUMBER,0,0); }
        | DOUBLE                        { $$ =  new Primitivo($1,TipoDato.DOUBLE,0,0); }
        | TRUE                        { $$ =  new Primitivo($1,TipoDato.BOOLEANO,0,0); }
        | FALSE                        { $$ =  new Primitivo($1,TipoDato.BOOLEANO,0,0); }
        | CADENA                        { $$ =  new Primitivo($1,TipoDato.STRING,0,0); }
        | PARIZQ expresion PARDER        { $$ = $2;}
;

relacionales
        : expresion IGUAL expresion       { $$ =  new Relacional($1,$3,OpRelacional.IGUAL,0,0);}
        | expresion DISTINTO expresion    { $$ =  new Relacional($1,$3,OpRelacional.DISTINTO,0,0);}
        | expresion MENOR expresion       { $$ =  new Relacional($1,$3,OpRelacional.MENOR,0,0);}
        | expresion MENORIGUAL expresion  { $$ =  new Relacional($1,$3,OpRelacional.MENORIGUAL,0,0);}
        | expresion MAYOR expresion       { $$ =  new Relacional($1,$3,OpRelacional.MAYOR,0,0);}
        | expresion MAYORIGUAL expresion  { $$ =  new Relacional($1,$3,OpRelacional.MAYORIGUAL,0,0);}
;

logicos
        : expresion AND expresion       { $$ =  new Logico($1,$3,OpLogico.AND,0,0);}
        | expresion OR  expresion       { $$ =  new Logico($1,$3,OpLogico.OR,0,0);}
        | NOT expresion                 { $$ =  new Logico(null,$2,OpLogico.NOT,0,0);}
;

fn_print: PRINT PARIZQ expresion PARDER { $$ = new Print($3,false,0,0)}
        | PRINTLN PARIZQ expresion PARDER { $$ = new Print($3,true,0,0)}
;
// Bloque de instrucciones
bloque
        : LLAVEIZQ instrucciones LLAVEDER      { $$= new Bloque($2);}
        | LLAVEIZQ  LLAVEDER                    { $$ = new Bloque([]) }
;
// Sentencia de control
fn_if
        : IF PARIZQ expresion PARDER bloque     { $$ = new FN_IF($3,$5,null,0,0);}
        | IF PARIZQ expresion PARDER bloque ELSE bloque     { $$ = new FN_IF($3,$5,$7,0,0);}
        | IF PARIZQ expresion PARDER bloque ELSE fn_if     { $$ = new FN_IF($3,$5,$7,0,0);}
;