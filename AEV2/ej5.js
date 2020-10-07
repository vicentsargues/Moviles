let array = [3, 2, 4]


function fact(array2){
    let array3=[];
    array2.forEach(element => {
        let num = 0;

        for (let index = 0; index <= element; index++) {

            num=num+index*element;
            
        }  
        array3[array2.indexOf(element)]   = num;    
            
        

    }   );
    return array3;
}



console.log(fact(array))