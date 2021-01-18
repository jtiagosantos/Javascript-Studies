
//Verificar se a frase tem a palavra Amor

let phrase = "Eu quero viver o amor!"
console.log(phrase.includes("Amor"));

// Retorna true caso o texto tenha a palavra esperada;
//Caso contrário, retorna false.

console.log(phrase.includes("amor"));

// O método includes também funcina em array
let array = [2,3,4,5]
console.log(array.includes(6));