/*
    callback function
        - função que passa como parâmetro de outra função

*/

//como o parâmetro é uma função, deve-se chamar a função para executá-la *
function sayMyName(name) {
    console.log("antes de executar a função callback");

    name(); //*

    console.log("depois de executar a funçao callback");
}


sayMyName(
    () => { //função anônima
        console.log("Estou em uma callbakc");
    }
);
