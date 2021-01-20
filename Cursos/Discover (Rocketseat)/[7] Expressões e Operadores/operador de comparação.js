
// Irá comparar valores e retornar um booleano como resposta à comparação

let one = 1; //operador de atribuição
let two = 2;

//igualdade ==
console.log(one == 1); // true
console.log(two == '2'); //true; o javascript converte o tipo automaticamente
console.log(one == two); //false

//diferença !=
console.log(one != two); //true
console.log(one != '1'); //false

//estritamente igual ===
console.log(one === '1'); //false; além da comparação normal, o javascript também compara o tipo
console.log(two === 2); //true

//estritamente diferente !==
console.log(two !== '2');
console.log(one !== 5);

//maior >
console.log(one > two); //false

//maior ou igual >=
console.log(one >= one); //true

//menor <=
console.log(0 < one); //true

//menor ou igual
console.log(one <= 10); //true