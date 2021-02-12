const renderHTML = (a, b, c, delta) => {
    let html = `
        <h2>Resolvendo Bhaskara</h2>
        <p>A equação atual é <span>${a}x² + ${b}x + ${c} = 0</span></p>
        <p>O cálculo realizado será <span>&Delta; = ${b}² - 4 . ${a} . ${c}</span></p>
        <p>O valor calculado foi <span class="bg-yellow">&Delta; = ${delta}</span></p>`;

    return html;
}

let areaResult = document.querySelector('div');

let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let a = 0; let b = 0; let c = 0;

    a = Number(prompt("Qual é o valor de a?"));
    b = Number(prompt("Qual é o valor de b?"));
    c = Number(prompt("Qual é o valor de c?"));

    let delta = b ** 2 - 4 * a * c;   
    
    areaResult.innerHTML = renderHTML(a, b, c, delta);

});