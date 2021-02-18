/*
O operador await só pode ser usado dentro de uma função async;
Ele retorna o valor resolvido de uma função;
Interrompe ou pausa a execução da async função até que a promessa seja resolvida;
*/

const showTopLanguage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => console.log('The top programming language is...'), 1000);
        setTimeout(() => {
            resolve('** Javascript **');
        }, 2000);
    })
}

async function resultPromise() {
    let result = await showTopLanguage();
    console.log(result);
}

resultPromise();