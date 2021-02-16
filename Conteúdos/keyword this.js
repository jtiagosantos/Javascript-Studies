//this é referência ao próprio objeto.
//É utilizada para dentro de um método para acessar uma
//propriedade (fora do escopo do método) do objeto.

//Exemplo:


const person = {
    name: 'Tiago',
    age: 19,
    sex: 'M',
    showProfile()  {
        return `${this.name} is of the sex ${this.sex} and is ${this.age} years old.`
        //this é referência a Person
    }
}

console.log(person.showProfile());


//Ao usar this em um método, não deve-se usar arrow function;