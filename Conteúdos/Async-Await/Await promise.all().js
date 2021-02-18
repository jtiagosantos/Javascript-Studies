/*
O Promise.all() DEVE SER USADO EM CASOS DE PROMISES INDEPENDENTES.
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
    console.log("MEAL...");
    
    let allPromise = await Promise.all([foodPromise(), drinkPromise(), dessertPromise()]);

    let food = allPromise[0];
    let drink = allPromise[1];
    let dessert = allPromise[2];

    console.log(`Food: ${food}\nDrink: ${drink}\nDessert: ${dessert}`);
}

meal();

/*
QUANDO AS PROMISES SÃO INDEPENDENTES, PODEMOS INICIALMENTE APENAS INVOCÁ-LAS, SEM O USO DO AWAIT.
NO FIM, QUANDO FOR PARA MOSTRAR OS RESULTADOS, COLOCAMOS O AWAIT EM CADA CHAMADA. ISSO FUNCIONA 
POIS COMO AS PROMISES NÃO DEPENDEM UMAS DAS OUTRAS, PODEM SER EXECUTADAS TODAS AO MESMO TEMPO.
*/