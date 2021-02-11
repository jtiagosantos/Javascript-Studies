let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let product = prompt("Que produto você está comprando?");
    let price = prompt(`Quanto custa ${product} que você está comprando?`);
    let value = prompt(`Qual foi o valor que você deu para pagar ${product}?`);
    let change ;
    value > price ? change = value - price : change = 0;
    change = String(change.toFixed(2)).replace(".", ",");
    alert(
        `Você comprou ${product} que custou R$ ${price}.\nDeu R$ ${value} em dinheiro e vai receber R$ ${change} de troco.\nVolte Sempre!`
    );
})
