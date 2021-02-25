/*
Operador Spread
    É muito utilizado para concatenar arrays
*/

let partes = ['ombro', 'joelhos'];
let musica = ['cabeca', ...partes, 'e', 'pés'];

console.log(musica);

/*
Por trás dos panos acontece o seguinte: 
    let musica = ['cabeca','ombro', 'joelhos', 'e', 'pés'];
*/


/*
Operador Rest
*/

somaNum = (a, b, c) => a + b + c;
array = [1,2,3];

console.log(somaNum(...array));

/*
Por trás dos panos acontece o seguinte:
    a = 1; b = 2; c = 3;
    ou seja...
        o elemento de cada posição corresponderá a um argumento!
*/

//Outro exemplo:
sum = (...nums) => nums.reduce((i,j) => i + j);

console.log(sum(1,2,3,4,5,6,7,8,9,10));

//Embora esteja passando os valores separados por vírgula,
//por usar o operator rest(...), a função entende que
//é um array que está sendo passado.

const array = (...nums) => {
    console.log(nums);
}

array(1,2,3,4,5,6,7,8,9,10);
