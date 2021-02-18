const products = ['laptop', 'mouse', 'headset', 'keyboard'];

const reviewProducts = products => {
    console.log('\nANALYZED PRODUCTS:');
    products.forEach(product => {
        console.log(`[${products.indexOf(product)+1}] ${product}`);
    })
};

const promise = (productsList, product) => {
    console.log('Analyzing available products...');
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(productsList.includes(product)) {
                resolve(product);
            }else {
                reject(`\n* ${product} Unavailable! *`);
            }
        }, 1000);
    })
};

const product1 = promise(products, 'mouse');
const product2 = promise(products, 'headset');
const product3 = promise(products, 'keyboard');
//const product4 = promise(products, 'mousepad');

Promise.all([product1, product2, product3]) //Se uma das promises falhar, esse erro será a única coisa retornada.
    .then(reviewProducts) //automaticamente o array retornado pela promise passa como parâmetro da função.
    .catch(reject => {
        console.log(reject);
    })