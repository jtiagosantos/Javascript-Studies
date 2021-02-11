const createHTML = (product, price, discount, finalPrice) => {
    let html = `
    <h2>Calculando desconto de 10% para ${product}.</h2>
    <p>O preço original era R$ ${price}.</p>
    <p>Você acaba de ganhar R$ ${discount} de desconto (-10%).</p>
    <p>No fim, você vai pagar R$ ${finalPrice} no produto ${product}.</p>`;

    return html;
}

let areaResult = document.querySelector('div');

let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let product = prompt("Qual é o produto que você está comprando?");
    let price = Number(prompt(`Qual é o preço de ${product}?`));
    let discount = String((price * 0.1).toFixed(2)).replace('.', ',');
    let finalPrice = String((price * 0.9).toFixed(2)).replace('.', ',');

    price = String(price.toFixed(2)).replace('.', ',');

    areaResult.innerHTML = createHTML(product, price, discount, finalPrice);
})