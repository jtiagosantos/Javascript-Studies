/*
    Function() constructor

    * new expression
    * create a new object
    * this keyword
    
*/

function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " está andando.";
    }
}

const Tiago = new Person("Tiago"); //cria um novo objeto, chamado Tiago
const Mayk = new Person("Mayk"); //cria um outro objeto
console.log(Tiago);
console.log(Mayk);

//Acessando os atributos do objeto
console.log(Tiago.name);
console.log(Mayk.walk());