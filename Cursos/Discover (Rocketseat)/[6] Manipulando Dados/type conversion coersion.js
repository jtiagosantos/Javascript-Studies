/*
    Type conversion (typecasting) vs Type coersion

    * Alteraçao de um tipo de dado para outro tipo

    Type conversion
        - Conversão manual de tipo
    Type coersion
        - Conversão feita pelo próprio javascript

*/

//Exemplo de type coersion

console.log(typeof('9' + 5)); //-> "95"
//O javascrit converte o 5 para string


//Exemplo de typecasting
console.log(Number('9') + 5);
//Conversão feita manualmente usando a função Number()