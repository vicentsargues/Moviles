let array = [6, 2, 4 , 5, 1,7,32, 10 ]

function minim(array2){
    let min=array2[0];
    array2.forEach(element => {

       if(element<min)min=element;

    });

    return (min);
}
console.log(minim(array));