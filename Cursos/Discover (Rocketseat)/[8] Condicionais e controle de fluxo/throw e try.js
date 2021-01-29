
//throw - serve para disparar erro

//try ... catch
//try - tenta executar um comando ou um bloco de comando
//catch - captura o erro disparado pelo throw

function sayMyName(name='') {
    if(name === '') {
        throw "Nome é obrigatório";
    }

    console.log("Tudo certo!");
}

try {
    sayMyName();
}catch(e) {
    console.log(e);
}

//quando o erro disparado pelo throw é capturado pelo catch, o programa
//segue o seu fluxo normalmente
console.log("Seguindo o fluxo do programa...");

sayMyName();

//Quando o erro disparado pelo throw não é capturado pelo catch, o programa
//não continua o seu fluxo, mesmo que ainda tenha mais linhas de código
console.log("XXXXXXXXXXXX");