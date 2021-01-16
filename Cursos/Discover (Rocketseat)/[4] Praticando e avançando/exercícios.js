// 1. Declare uma variável de nome weight.
let weight


// 2. Que tipo de dado é a variável acima?
console.log(typeof(weight))

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

let name = "Tiago"
let age = 18
let stars = 4.8
let isSubscribed = true

/**
    4. A variável student abaixo é de que tipo de dados?

    4.1. Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2. Mostre no console a seguinte mensagem: 
        <name> de idade <age> pesa <weight> kg.
 */

let student = {
     name: "Tiago",
     age: 18,
     weight: 74.8,
     isSubscribed: true
}

 //type
 console.log(typeof(student))

//message
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)


// 5. Declare uma variável do tipo Array, de nome students e atribua 
//    a ela nenhum valor, ou seja, somente um array vazio

let students = []



/*
    6. Reatribua valor para a variável acima, colocando dentro dela o
    objeto student da questão 4. (Não copiar e colar o objeto, mas usar
    o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)


/*
    7. Coloque no console o valor de posição zero do Array acima
*/

console.log(students[0])


/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const paula = {
    name: "Paula",
    age: 26,
    weight: 55.4,
    isSubscribed: false
}

students = [
    student, 
    paula
]

console.log(students)
//outra possibilidade: students[1] = paula

