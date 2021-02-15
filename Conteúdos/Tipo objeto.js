//Estrutura de um objeto
/*
object = {
    key: value
}
*/

//Criando um objeto
let user = {
    name: 'Mayk',
    age: 99
}

console.log(user);

//Acessando os valores
console.log(user.name);
console.log(user['age']); //outra maneira de acesso

//Criando outras propriedades no objeto
user.sexo = 'masculino';
user['height'] = 1.67;

console.log(user);

//Deletando propriedades do objeto
delete user.sexo;

console.log(user);

//Mostrando todas as chaves do objeto
console.log(Object.keys(user));

//Mostranto todos os valores do objeto
console.log(Object.values(user));

//Mostrar um array com outros array contendo a chave e o valor
console.log(Object.entries(user));

//Torna o objeto inalterável
console.log(user);

//Object.freeze(user);

//delete user.height;

console.log(user); //Não foi alterado

//Permite apenas a alteração das propriedades que já existem

console.log(user);

Object.seal(user)

user.name = 'John';
user['sexo'] = 'M';

console.log(user);