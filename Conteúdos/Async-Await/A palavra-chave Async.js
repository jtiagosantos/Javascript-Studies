/*
Async função é uma alterntiva à criação de promise.
Uma Async função retorna uma promessa. Por conta disso, 
é possível utilizar .then() e .catch().

Uma async função retornará uma das três coisas:
-> Se nada for retornado pela função, será retornado uma promise com valor undefined;
-> Se for retornado um valor não esperado, a async retornará uma promise para esse valor;
-> Se uma promise for retornada da função, a async retornará essa promise;
*/

//Exemplo com new Promise
/*
const checkValue = num => {
    return new Promise((resolve, reject) => {
        if(num === 0) {
            resolve('zero');
        }else {
            reject('not zero');
        }
    })
}

checkValue(5)
    .then(console.log)
    .catch(err => console.log(err));
*/

//O mesmo exemplo, mas usando async

async function checkValue(num) {
    if(num === 0) return 'zero';

    return 'not zero';
}

checkValue(0)
    .then(console.log)
    .catch(err => console.log(err));