//getters são métodos que obtêm e retornam as 
//propriedades internas de um objeto

//Exemplo:

const person = {
    _firstName: 'John', //o _ indica que a propriedade não deve ser alterada
    _lastName: 'Doe',
    get fullName () {
        if(this._firstName && this._lastName) {
            return `${this._firstName} ${this._lastName}`;
        }else {
            return `Missing a first name or a last name.`;
        }
    }
}

//Quando se utiliza o método get, não deve-se colocar os parênteses.

console.log(person.fullName);