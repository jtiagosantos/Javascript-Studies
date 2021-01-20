/*
    - Expressions - qualquer linha de código que resolve alguma coisa
    - Operators
        Binary
        Unary
        Ternary
*/

let number; //expression

let name; //other expression


//operators (examples)

//Binary - Deve ter dois elementos ao redor
number = 1;
console.log(number + 5); //operator +

//Unary - Precisa de apenas um elemento
number = 3;
console.log(++number); //operador de incremento ++
console.log(typeof(number)); //operator typeof

//Ternary - Precisa de três elementos
console.log(false? "alo" : "nada"); //esse é o único caso: exp ? exp : exp
//Se true, a primeira expressão; se false, a segunda.