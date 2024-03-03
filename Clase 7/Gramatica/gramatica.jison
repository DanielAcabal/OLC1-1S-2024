%{
    // Importar librerías
%}

%lex // Inicia parte léxica

%options case-insensitive

%%

\s+                                 //ignora espacios

// Comentarios son con //

[0-9]+("."[0-9]+)\b     return 'DOUBLE';
[0-9]+\b                return 'NUMBER';

"EXEC"                  return 'EXEC';

([a-zA-z])[a-zA-Z0-9_]* return 'ID';

"+"                     return 'MAS';
"-"                     return 'RES';
"*"                     return 'MUL';
"/"                     return 'DIV';
";"                     return 'PYC';


<<EOF>>                 return 'EOF';

.					   {    console.log(yylloc.first_line, yylloc.first_column,'Lexico',yytext);    }

// Finaliza parte de Léxica
/lex

// precedencia
%left 'MAS', 'RES'
%left 'MUL','DIV'

// Inicio de gramática
%start ini

// Parte sintáctica  - Definición de la gramática
%%

ini : instrucciones EOF { return $1;}
;
instrucciones: instrucciones instruccion    {  $1.push($2); $$ = $1;}
            | instruccion                   { $$ =  [$1];}
;
instruccion: EXEC expresion PYC         { $$ =  $2;}
;
// Para sitetisar un dato, se utiliza $$
expresion: expresion MAS expresion      { $$ = $1 + $3;}
        | expresion RES expresion       { $$ = $1 - $3;}
        | expresion MUL expresion       { $$ = $1 * $3;}
        | expresion DIV expresion       { $$ =  $1 / $3;}
        | NUMBER                        { $$ = parseInt($1);}
        | DOUBLE                        { $$ =  parseFloat($1); }
;
