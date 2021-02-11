convertMeasures = measure => {
    const html = `<h2>A distância de ${measure} metros, corresponde a...</h2>
    <p>${(measure/1000).toFixed(3)} quilômetros (Km)</p>
    <p>${(measure/100).toFixed(3)} hectômetros (Hm)</p>
    <p>${(measure/10).toFixed(3)} decâmetros (Dam)</p>
    <p>${(measure*10).toFixed(3)} decímetros (dm)</p>
    <p>${(measure*100).toFixed(3)} centímetros (cm)</p>
    <p>${(measure*1000).toFixed(3)} milímetros (mm)</p>`

    return html;
}


let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let measure = Number(prompt("Digite uma distância em metros (ms)"));
    let divElement = document.querySelector('.measures-area');
    divElement.innerHTML = convertMeasures(measure);
});