/*
    Escopo
       * Local
       * Global
    
    Variáveis
       * var - escopo local e global
       * let e const - escopo local
       
*/

//O que acontece por trás dos panos
var x //undefined -> hoisting

console.log("-> existe x antes do bloco", x)

{
    //O que acontece por trás dos panos
    //x = 0
    var x = 0
}


console.log("-> existe x depois do bloco", x)


/*
    Como o escopo de var é global, mesmo estando dentro de um bloco,
    pode ser acessado antes ou depois do bloco
*/