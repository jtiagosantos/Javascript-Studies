/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas
e irá mostrar uma mensagem se a família está com saldo positivo ou
negativo, seguido do valor do saldo.

 */

const bills = {
    incomes: [10, 150, 300, 1000],
    expenses: [20, 100, 250, 850]
}

console.log(result(bills.incomes, bills.expenses));

function result(incomesArray, expenseArray) {
    let totalincomes = incomesArray.reduce((value, total) => value + total);
    let totalExpenses = expenseArray.reduce((value, total) => value + total);

    let balance = totalincomes - totalExpenses;

    return balance > 0 ? `Saldo positivo - R$${(balance).toFixed(2)}`
    : `Saldo negativo - -R$${(balance*-1).toFixed(2)}`;
}

