/* ### Transformar as notas escolares

Crie um algoritmo que transforme as notas do sistema numérico 
para sistema de notas em caracteres tipo A B C.

* de 90 para cima -> A;
* entre 80 e 89 -> B;
* entre 70 e 79 -> C;
* entre 60 e 69 -> D;
* menor que 60 -> F;

*/

function transformScore(score) {
    let result;

    if(score >= 90 && score <= 100) {
        result = "A";
    }else if(score >= 80 && score <= 89) {
        result = "B";
    }else if(score >= 70 && score <= 79) {
        result = "C";
    }else if(score >= 60 && score <= 69) {
        result = "D";
    }else if(score < 60 && score >= 0){
        result = "F";
    }else {
        result = "Nota inváilda!";
    }

    return result;
}

const scores = [60.5, 80, 100, 50, -1, 101, 70];
for(let score of scores) {
    console.log(transformScore(score));
}