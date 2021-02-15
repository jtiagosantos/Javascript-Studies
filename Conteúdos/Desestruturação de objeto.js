//DESESTRUTURAÇÃO

const obj = {
    name1: "Tiago",
    name2: "Rogério",
    name3: "Mateus",
}

const {name1, name2, name3} = obj;

console.log(name1);

const {name1: p1, name2: p2, name3:p3} = obj;

console.log(p3);
