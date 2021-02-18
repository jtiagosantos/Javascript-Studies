const showMessage = message => {
    return new Promise((resolve, reject) => {
        if(message) {
            resolve(message);
        }else {
            reject('Message empty!');
        }
    })
}

showMessage("Hello World")
    .then(message => message.toUpperCase())
    .then(console.log) //automaticamente o que é retornado pela promisse passa como parâmetro da função
    .catch(console.log);