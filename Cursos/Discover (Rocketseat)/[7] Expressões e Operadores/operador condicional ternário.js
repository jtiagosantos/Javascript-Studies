
//Operador condicional (ternário)

//Dependendo da condição, nós receberemos valores diferentes

//se condição true então valor1 se não valor2
//condition ? valor1: valor2

//Exemplos
//Café da manhã top

let pao = false;
let queijo = true;

const niceBreakfast = pao || queijo ? "Café Top!" : "Café ruim";

console.log(niceBreakfast);

//Maior de 18 anos

let age = 18;

const canDrive = age >= 18 ? "Can drive!" : "Can't drive!";

console.log(canDrive);