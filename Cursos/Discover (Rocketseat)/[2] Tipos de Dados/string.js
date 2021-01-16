/*
    String

    * Cadeia de caracteres

    "" // aspas duplas
    '' // asplas simples
    `` // template leterals ou template strings

 */

 console.log("Tiago")
console.log('React')

//* Aspas simples (literal) devem estar em volta de aspas duplas
console.log("Rect 'Native'")

//* Dentro de `` aspas simples e duplas ficam literais
console.log(`"Tiago" 'stack'  '' "'"`)

//* As template strings permitem que usemos multilinha (até as linhas são impressas)
console.log(`
React
React Native

Node
`)

//* As template strings também permitem mostrar expressões (deve-se usar ${expressão})
//* Isso é chamado de interpolação
console.log(`1 + 1 = ${2}`)
console.log(`Javascript - ${2020+1}`)