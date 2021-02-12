const renderHTML = (name, note1, note2, average, condition, classAverage, status) => {
    let html = `
        <h2>Analisando a situação de ${name}</h2>
        <p>Com as notas ${note1} e ${note2}, a <span>média é ${average}</span></p>
        <p>${condition}, o aluno está <span class=${classAverage}>${status}</span></p>`;

    return html;
}

const formatNote = note => String(note.toFixed(1)).replace(".", ",");

let areaResult = document.querySelector('div');

let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let name = prompt("Qual é nome do(a) aluno(a)?");
    let firstNote = Number(prompt(`Primeira nota de ${name}`));
    let secondNote = Number(prompt(`Segunda nota de ${name}`));
    
    let average = (firstNote + secondNote) / 2;

    let status; let condition;

    if(average < 3.0){
        condition = "Com média abaixo de 3,0";
        classAverage = "disapproved";
        status = "REPROVADO";
    }else if(average >= 3.0 && average <= 6.0){
        condition = "Com média entre 3,0 e 6,0";
        classAverage = "recovery";
        status ="RECUPERAÇÃO";
    }else{
        condition = "Com média acima de 6,0";
        classAverage = "okay";
        status = "APROVADO";
    }

    firstNote = formatNote(firstNote);
    secondNote = formatNote(secondNote);
    average = String(average.toFixed(2)).replace(".", ",");

    areaResult.innerHTML = renderHTML(name, firstNote, secondNote, average, condition, classAverage,status);
})
