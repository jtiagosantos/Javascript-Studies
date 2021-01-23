/*
    Operadores unários
        * typeof
        * delete
*/

//typeof - mostra o tipo de dado de um elemento
console.log(typeof(true));

//delete - deleta propriedade de um objeto
const person = {
    name: "Tiago",
    age: 18
}

console.log(person);

delete(person.age);

console.log(person);