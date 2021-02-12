const renderHTML = (price, newPrice, status, difference, percentage, percentageStatus) => {
    let html = `
        <h2>Analisando os valores informados</h2>
        <p>O produto custava R$ ${price} e agora custa R$ ${newPrice}.</p>
        <p>Hoje o produto está mais ${status}.</p>
        <p>O preço subiu R$ ${difference} em relação ao preço anterior.</p>
        <p>Uma variação de ${percentage}% pra ${percentageStatus}.</p>`;

    return html;
}

let areaResult = document.querySelector('div');

const formatValue = value => {
    return String(value.toFixed(2)).replace(".", ",");
}

let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let price = Number(prompt("Qual era o preço anterior do produto?"));
    let newPrice = Number(prompt("Qual é o preço atual do produto?"));

    let status; let difference; let percentage;

    if(price < newPrice){
        status = "caro";
        difference = newPrice - price;
        percentage = (difference * 100) / newPrice;
        percentageStatus = "cima";
    }
    else if(price > newPrice){
        status = "barato";
        difference = price - newPrice;
        percentage = (difference * 100) / newPrice;
        percentageStatus = "baixo";
    }

    difference = formatValue(difference);
    percentage = formatValue(percentage);
    price = formatValue(price);
    newPrice = formatValue(newPrice);

    areaResult.innerHTML = renderHTML(price, newPrice, status, difference, percentage, percentageStatus);
})