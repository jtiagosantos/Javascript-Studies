
//contar elementos de um array
let myArray = [
    "Tiago",
    {
        user: "kenobi123",
        id: "ken123",
        password: "********"
    },
    () => {
        return "Eu sou uma função dentro de uma array!"
    }
]

console.log(myArray.length);

//BRINDE!!

//Acessando os elementos do myArray
console.log(myArray[0]);

console.log(myArray[1]);
console.log(myArray[1].id);

console.log(myArray[2]);
console.log(myArray[2]());