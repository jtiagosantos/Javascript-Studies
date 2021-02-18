/*
PROMISES DEPENDENTES POIS O QUE FOR RETORNADO PRO UMA PROMISE SERVIRÁ DE PARÂMETRO PARA 
UMA PROMISE.
*/

const shopForBeans = () => {
    return new Promise((resolve, reject) => {
        const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];

        setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * 5);
            let beantype = beanTypes[randomIndex];

            console.log(`I bought ${beantype} beans because they were on sale.`);
            resolve(beantype);
        }, 1000);
    });
};


const soakTheBeans = beantype => {
    return new Promise((resolve, reject) => {
        console.log('Time to soak the beans.');
        setTimeout(()  => {
            console.log(`... The ${beantype} beans are softened`);
        }, 1000);

        resolve(true);
    });
};


const cookTheBeans = isSoftened => {
    return new Promise((resolve, reject) => {
        console.log('Time to cook the beans.');

        setTimeout(() => {
            if(isSoftened) {
                console.log('... The beans are cooked!');

                resolve('\n\nDinner is served!');
            }
        }, 1000);
    });
};

async function makeBeans() {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type); //O retorno de uma promise passa como parâmetro de uma outra promise.
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
}

makeBeans();
