let button = document.querySelector('button');

button.addEventListener('click', () => {
    let numberElement = Number(prompt("Digite um número inteiro qualquer:"));
    alert(
        `Antes de ${numberElement}, temos o número ${numberElement-1}.\nDepois de ${numberElement}, temos o número ${numberElement+1}`
    );
})
