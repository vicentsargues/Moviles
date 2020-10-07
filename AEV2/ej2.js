let array = [6, 2, 4 , 5, 1,7,32, 10 ]

function media(array2){
    let media=0;
    array2.forEach(element => {

       media =media +element;

    });

    media=media/array2.length;
    return (media);
}
console.log(media(array));