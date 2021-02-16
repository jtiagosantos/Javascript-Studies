//setters são métodos utilizados para retribuir valores de 
//propriedades de objetos

const person = {
    _age: 37,
    set age(newAge) {
        if(typeof(newAge) === 'number') {
            this._age = newAge;
        }else {
            console.log('You must assign a number to age.');
        }
    }
}

person.age = 45; //Como não deve-se utilizar parênteses, a passagem de parâmetro
                 //é feita por atribuição.
console.log(person._age); //45

person.age = 'num';