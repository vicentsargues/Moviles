readlineSync = require('readline-sync');
        num = readlineSync.question("Dime un numero ");
    while (num>12||num<1) {
        console.log("el numero debe estar entre 1 y 12")
        readlineSync = require('readline-sync');
        num = readlineSync.question("Dime un numero ");
    }
function aleatorio(){
    let random = Math.floor(Math.random() * (12 - 1) + 1);
    return random;
}
if (num==aleatorio()){
console.log("has acertado")
}
else{
    console.log("no has acertado intentalo de nuevo")
}