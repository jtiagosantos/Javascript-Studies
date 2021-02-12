const renderHTML = (year, phrase, classSpan, emoji) => {
    let html =`
    <h2>Analisando o ano de ${year}...</h2>
    <p>O ano de ${year} <span class=${classSpan}>${phrase}</span>${emoji}</p>`;

    return html;
}

let areaResult = document.querySelector('div');

let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let year = prompt("Qual é o ano que você quer verificar?");

    if(year % 4 === 0 && year % 100 !== 0){
        areaResult.innerHTML = renderHTML(year, "É BISSEXTO", "bissextile", "✅")
    }else if(year % 4 === 0 && year % 100 === 0){
        if(year % 400 === 0){
            areaResult.innerHTML = renderHTML(year, "É BISSEXTO", "bissextile", "✅")
        }else{
            areaResult.innerHTML = renderHTML(year, "NÃO É BISSEXTO", "no-bissextile", "❌")
        }
    }else{
        areaResult.innerHTML = renderHTML(year, "NÃO É BISSEXTO", "no-bissextile", "❌")
    }

    

})