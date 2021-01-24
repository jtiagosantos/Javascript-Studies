
//for in - percorre os índices de uma sequência e também serve para
//percorrer as propriedades de um objeto

const array = [0,3,5,9,12]
for(let i in array) {
    console.log(i);
}

let person = {
    name: "Tiago",
    age: 18,
    weight: 65.7,
    married: false,
    hoobies: ["Sleep", "Study", "Play Games", "Code"],
    others: {
        beautiful: false,
        tall: false,
        intelligent: true
    }
}

for(let property in person) {
    console.log(property);
    //para pegar o valor de cada propriedade
    console.log(person[property]);
}