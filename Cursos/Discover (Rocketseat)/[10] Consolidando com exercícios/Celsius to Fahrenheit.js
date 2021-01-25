/* ### Celsius em Fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça
a transformação de uma unidade para outra

    * C = (F - 32) * 5/9
    * F = C * 9/5 + 32

*/

temperatureConverter = temperature => {
    let result;

    temperature = temperature.toUpperCase();

    if(temperature.includes("°C")) {
        let c = Number(temperature.replace("°C", ""));
        result = (c * 9/5 + 32).toFixed(1);
        return `${result}°F`;
    }else if(temperature.includes("°F")){
        let f = Number(temperature.replace("°F", ""));
        result = ((f - 32) * 5/9).toFixed(1);
        return `${result}°C`;
    }else {
        return "Temperatura inválida!";
    }
}

console.log(temperatureConverter("50°C"));
console.log(temperatureConverter("25°f"));
console.log(temperatureConverter("10°x"));