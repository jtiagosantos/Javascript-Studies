/*
PROMESSAS INDEPENDENTES POIS O VALOR RETORNADO POR UMA PROMISE NÃO INFLUENCIARÁ
NO RESULTADO DE OUTRAS PROMISES
*/

const foodPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Pizza!');
        }, 1000);
    });
};

const drinkPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Soda!');
        }, 1000);
    });
};

const dessertPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Ice cream!');
        }, 1000);
    });
};

//AS TRÊS PROMISES SÃO INDEPENDENTES UMAS DAS OUTRAS

async function meal() {
    let food = foodPromise();
    let drink = drinkPromise();
    let dessert = dessertPromise();

    console.log("MEAL...");
    console.log(`Food: ${await food}\nDrink: ${await drink}\nDessert: ${await dessert}`); //Dessa forma as promisses são executadas ao mesmo tempo
}

meal();

/*
QUANDO AS PROMISES SÃO INDEPENDENTES, PODEMOS INICIALMENTE APENAS INVOCÁ-LAS, SEM O USO DO AWAIT.
NO FIM, QUANDO FOR PARA MOSTRAR OS RESULTADOS, COLOCAMOS O AWAIT EM CADA CHAMADA. ISSO FUNCIONA 
POIS COMO AS PROMISES NÃO DEPENDEM UMAS DAS OUTRAS, PODEM SER EXECUTADAS TODAS AO MESMO TEMPO.
*/