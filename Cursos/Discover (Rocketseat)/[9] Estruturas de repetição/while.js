
let i = 0;

while(i < 10) {
    console.log(i);
    i++;
}

let k = 1;
let j = 1;

while(j <= 10) {
    console.log(`${i} - ${k}`);
    if(j == 4) {
        break;
    }
    j++; k++;
}