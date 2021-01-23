/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano
    é obrigatório (condicionais e loops)

    - false
    - 0
    - -0
    - ""
    - null
    - undefined
    - NaN

*/

console.log(false ? "Verdadeiro" : "Falso");
console.log("" ? "Verdadeiro" : "Falso");
console.log(0 ? "Verdadeiro" : "Falso");
console.log(undefined ? "Verdadeiro" : "Falso");


/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano
    é obrigatório (condicionais e loops)

    - true
    - {}
    - []
    - 1
    - 3.23
    - "0"
    - "false"
    - -1
    - Infinity
    - -Infinity

*/

console.log(true ? "Verdadeiro" : "Falso");
console.log(1 ? "Verdadeiro" : "Falso");
console.log({} ? "Verdadeiro" : "Falso");
console.log("0" ? "Verdadeiro" : "Falso");
console.log(-Infinity ? "Verdadeiro" : "Falso");
console.log("false" ? "Verdadeiro" : "Falso");