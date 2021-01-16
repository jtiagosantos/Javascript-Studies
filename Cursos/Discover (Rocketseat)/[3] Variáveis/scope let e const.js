/*
    Escopo
       * Local
       * Global
    
    Variáveis
       * var - escopo local e global
       * let e const - escopo local
       
*/

// const e let são de escopo local e, por isso, só funcionam no escopo onde são criadas

let y = 1

{
    let y = 0
    console.log("-> existe y", y)
    //A variável y só pode ser acessada dentro desse bloco delimitado por chaves,
    //e depois da linha em que a variável foi declarada

    /*
        y = 0 -> Se isso fose colocado sem a keyword let, o valor da
        variável global y=1 teria seu valor trocado para y=0, e fora
        do escopo desse bloco o valor ficaria 0
    */
}

console.log("-> existe y depois do bloco", y)
/*
    Aqui a variável só existe depois do bloco por conta de ela ter sido 
    criada na linha 14, com o valor 1;
*/

/*
    Note que y = 1 é global; já y = 0 local (escopo dentro do bloco)
*/


