/*
A função setTimeout cria um atraso que é executado de forma assíncrona.
Assim, qualquer código síncrono é executado antes do setTimeout.

setTimeout(função, time(em milissegundos))
*/

console.log("Primeiro console.log()");

const showMessage = () => {
    console.log("console.log() do setTimeout!");
}

setTimeout(showMessage, 2000); //Pode ser até o menor tempo possível, mas o código
                               //síncrono será executado primeiro.

console.log("Segundo console.log()");