
let techs = ["html", "css", "js"];

// Adicionar um item no fim
techs.push("react");
//adicionar no começo
techs.unshift("mongodb");
//remover do fim
techs.pop();
//remover do começo
techs.shift();
//pegar somente alguns elementos do array
console.log(techs.slice(1,3));
//remover 1 ou mais items em qualquer posição do array
techs.splice(1,2); //splice(*, #) -> * inicio; # quantos valores serão retirados a partir do início
//encontrar a posição de um elemento no array
techs = ["html", "css", "js"];
console.log(techs.indexOf("js")); //índice de...


console.log(techs);