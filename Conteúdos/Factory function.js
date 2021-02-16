//Funções de fábricas são utilizadas para poder criar
//várias instâncias de objetos sem ficar repetindo linhas e linhas de código.

const createPerson = (firstName, lastName, age, sex, height, weight) => {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        height: height,
        weight: weight,
        fullName() {
            if(this.firstName && this.lastName) {
                return `${this.firstName} ${this.lastName}`;
            }else {
                console.log('firstName empty or lastName empty!');
            }
        },
        get measures() {
            if(typeof(this.height) === 'number' && typeof(this.weight) === 'number') {
                return `Height: ${this.height}\nWeight: ${this.weight}`;
            }else {
                console.log('Invalid measures!');
            }
        }
    }
}

const jhon = createPerson('Jhon', 'Doe', 23, 'M', undefined, 67.9);

console.log(jhon.lastName);

console.log(jhon.fullName());

jhon.measures;
