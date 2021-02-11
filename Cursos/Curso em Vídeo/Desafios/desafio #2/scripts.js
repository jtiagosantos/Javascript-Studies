let buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', () => {
    let name = prompt("Qual é o seu nome?");
    let age = prompt(`Olá, ${name}! Quantos anos você tem?`);
    alert(`Acabei de conhecer ${name}, que tem ${age} anos de idade!`);
})