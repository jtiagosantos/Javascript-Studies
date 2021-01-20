/*
    new
      * left-hand-side expression
      * create a new object
*/

let name = new String("Tiago"); //Cria um novo objeto 
name.surName = "Santos";
let age = new Number(18);
console.log(name);
console.log(age);

console.log(name.surName);
console.log(name, name.surName, age);

let date = new Date("2002-01-22");
console.log(date);