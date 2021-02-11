const convertToKelvin = temperature => {
    return Number(temperature) + 273.15;
}

const convertToFahrenheit = temperature => {
    return (Number(temperature) * 9/5) + 32;
}

const contentTemperatures = temperature => {
    let kelvin = String(Number(convertToKelvin(temperature)).toFixed(2).replace(',', '.'));
    let fahrenheit = String(Number(convertToFahrenheit(temperature)).toFixed(2).replace(',', '.'));
    let newTemperature = String(temperature).replace(',', '.');

    const html = `<h2>A temperatura de ${newTemperature}°C corresponde a...</h2>
    <p>${kelvin}°K (Kelvin)</p>
    <p>${fahrenheit}°F (Fahrenheit)</p>`;

    return html;
}

let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', () => {
    let temperature = prompt("Digite uma temperatura em °C (Celsius)");
    let temperaturesArea = document.querySelector('.temperatures-wrapper');
    temperaturesArea.innerHTML = contentTemperatures(temperature);
})
