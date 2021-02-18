/*
O método .then() é utilizado para fizer o que acontecerá com a promise.
Inicialmente, a promise está pendente e, com isso, é necessário
um "sinalizdor" para dizer o que será feito após isso. Esse é o papel do 
.then()
*/


const status = false;

const promise = () => {
    return new Promise((resolve, reject) => {
        if(status) {
            resolve('A promise foi resolvida!');
        }else {
            reject('A promise não foi resolvida!');
        }
    })
}

//const handleSuccess = resolve => console.log(resolve); //função retornada, caso a promise seja resolvida

//const handleFailure = reject => console.log(reject); //função retornada, caso a promise não seja resolvida

//promise().then(handleSuccess, handleFailure); //promise então faz o que será retornado por uma das funções (manipuladores)

//promise.then(promiseResolve => console.log(promiseResolve), promiseReject => console.log(promiseReject));

promise()
    .then(resolve => {
        console.log(resolve);
    })
    .then(null, reject => {
        console.log(reject);
    });


//Com o .catch()
//Não precisa mais colocar o null
//Coloca na última posição para tratar o error
/*
promise()
    .then(resolve => {      //.then() -> manipulador de sucesso
        console.log(resolve);
    })
    .catch(reject => {      //.catch() -> manipulador de falha
        console.log(reject);
    });
*/