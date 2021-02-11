let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', event => {
    let id = event.target.id;
    alert(`Você clicou no ${id}° botão!`)
}))

