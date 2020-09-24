
function pedir() {
    readlineSync = require('readline-sync');
    num = readlineSync.question("Dime un numero ");
    return num
  }
num1=pedir();
function par(num1){
    if(num1%2==0){
        console.log("el numero es par")
    }
    else
    {
        console.log("el numero es impar");
    }

}
par(num1);