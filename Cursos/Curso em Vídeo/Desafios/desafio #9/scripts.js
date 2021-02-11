const createHTML = (name, salary, readjustment, increase, newSalary) => {
    let html = `
        <h2>${name} recebeu um aumento salarial!</h2>
        <p>O salário atual era R$ ${salary}.</p>
        <p>Com um aumento de ${readjustment}%, o salário vai aumentar R$ ${increase} no próximo mês.</p>
        <p>E a partir daí, ${name} vai passar a ganhar R$ ${newSalary}.</p>`;

    return html;
}

let areaResult = document.querySelector('div');

let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let name = prompt('Qual é o nome do funcionário?');
    let salary = prompt(`Qual é o salário de ${name}?`);
    let readjustment = prompt(`O Salário de ${name} vai ser reajustado em qual porcentagem?`);
    let increase = salary * (readjustment/100);
    let newSalary = Number(salary) + Number(increase);

    areaResult.innerHTML = createHTML(name,salary,readjustment,increase,newSalary);
})