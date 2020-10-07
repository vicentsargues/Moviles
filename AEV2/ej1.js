let array = ["Ana", 2, "Javi" , 5, "Roberto",7,"Vanessa", 10 ]

function borrar(array2){
    let array3=[];
    array2.forEach(element => {

        if(typeof(element)=="string"){
            array3[array2.indexOf(element)]   = array2[array2.indexOf(element)]
        }  

    }   );
    return array3;
}

function par(array2){
    let array3=[];
    array2.forEach(element => {

        if(element%2!=0){
            array3[array2.indexOf(element)]   = array2[array2.indexOf(element)]
        }  

    }   );
    return array3;
}
 
    console.log( borrar(array))
    console.log (array)
    console.log( par(array))