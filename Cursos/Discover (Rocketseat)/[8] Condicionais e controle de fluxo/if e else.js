
//if ... else

let temperatura = 36.5;

if(temperatura >= 37) {
    console.log("Febre");
}else {
    console.log("Saudável");
}

//temperatura >= 37 ? console.log("Febre") : console.log("Saudável");

if(temperatura >= 37.5) {
    console.log("Febre alta");
}else if(temperatura < 37.5 && temperatura >= 37) {
    console.log("Febre moderada");
}else {
    console.log("Saudável"); 
}