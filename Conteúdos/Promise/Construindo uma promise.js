/*
Uma promise é uma função (Objeto), e recebe resolve e reject funções 
como parâmetro.

Para ser instanciada, usa-se new Promise(promise).

Uma promisse pode está em três estados:
    1. pendente;
    2. resolvida;
    3. rejeitada (error);

Quando a promise está pendente na sua execução, posteriormente ela pode ser 
resolvida, ou pode ser rejeitada.

Toda promise terá esta ideia:
    Se determinada condição for satisfeita, a promise é resolvida;
    caso contrário, ela será rejeitada.
*/

const status = true;

const createPromise = (resolve, reject) => {

    if(status) {
        resolve('A promise foi resolvida!');
    }else {
        reject('A promise não foi resolvida!');
    }
}

const resultPromise = new Promise(createPromise);

console.log(resultPromise);

console.log(typeof(resultPromise));
