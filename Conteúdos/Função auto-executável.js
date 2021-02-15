
//Podemos fazer uma função auto-executável, de modo que ela mesma se 
//chama, tirandoa necessidade de chamá-la depois de criá-la.

//Exemplo #1
(() => {
    console.log("Hello World!");
})();

//Exemplo #3
(() => {
    console.log(true? "Correct" : "Incorrect"); //usando condicional ternário
})();


//Exemplo #3
(() => {
    const person = {
        name: "Tiago",
        age: 18,
        height: 1.65,
        work: true
    }
    console.log(person);
    console.log(`${person.name} have ${person.age} years old.`);
})();