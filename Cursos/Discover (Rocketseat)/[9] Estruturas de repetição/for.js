
for(let i=1; i<=10; i++) {
    console.log(i);
}

for(let i=10; i>=1; i--) {
    console.log(i);
    if(i === 4) {
        break; //para o loop dada a condição
    }
}

let k = 1;

for(let i=1; i<10; i++, k++) {
    if(i == 7) {
        continue; //continua o loop, mas o 7 não será impresso
    }
    console.log(`${i} - ${k}`);
}