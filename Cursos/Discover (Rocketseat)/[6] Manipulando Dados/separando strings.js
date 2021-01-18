/*
    Separe um texto que contém espaços, em um novo array em que 
    cada texto é uma posição do array. Depois disso, transforme o 
    array em um texto e onde tem espaços, coloque _
*/

let text = "Eu quero viver um Amor!";

let myArray = text.split(" "); //separa onde tem espaço em branco (nesse caso)
console.log(myArray);

let textWithUndescore = myArray.join("_");
console.log(textWithUndescore);