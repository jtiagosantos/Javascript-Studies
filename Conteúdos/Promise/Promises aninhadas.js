const status = true;
const firstPromise = () => {
    return new Promise((resolve, reject) => {
        if(status) {
            resolve();
        }else {
            reject('A primeira promise não foi resolvida!');
        }
    })
}


const secondStatus = true;
const secondPromise = () => {
    return new Promise((resolve, reject) => {
        if(secondStatus) {
            resolve('A segunda promise foi resolvida!');
        }else {
            reject('A segunda promise não foi resolvida!');
        }
    })
}

firstPromise()
    .then(firstPromiseSuccess => {
        return secondPromise(firstPromiseSuccess)
    })
    .then(secondPromiseSuccess => {
        console.log(secondPromiseSuccess);
    })
    .catch(SecondPromiseFail => {
        console.log(SecondPromiseFail);
    })

/*
Se a primeira promise for resolvida, ela retorna o seu próprio resolve(); caso contrário,
retornará a segunda promise. Se a segunda promise for resolvida, retorna resolve(); senão,
retorna reject().
*/