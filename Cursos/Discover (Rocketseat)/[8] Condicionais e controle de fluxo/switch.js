
let expression = 'a';

switch(expression) {
    case 'a':
        console.log('a');
        break;
    case 'b':
        console.log('b');
        break;
    default: //caso não caia em nenhum caso acima
        console.log("default");
        break; //é opcional no default
}