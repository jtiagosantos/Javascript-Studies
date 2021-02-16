//DESESTRUTURAÇÃO

const obj = {
    name1: "Tiago",
    name2: "Rogério",
    name3: "Mateus",
    others: {
        name: 'Jhon',
        age: 99
    }
}

const { name1, name3 } = obj;
console.log(name1);

const { name2 } = obj;
console.log(name2);

const { name1: p1, name2: p2, name3:p3 } = obj;

console.log(p3);

const { name } = obj.others;
console.log(name);


/*
IMPORTANTE!!

O NOME DE VARIÁVEL A QUAL SERÁ ATRIBUÍDA O VALOR DA PROPRIEDADE,
DEVE VER O MESMO NOME DA CHAVE NA QUAL ESTÁ A PROPRIEDADE DESEJADA.
*/