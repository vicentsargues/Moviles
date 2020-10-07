let users=["Amoret","Manolo","Carlos"];

let blackList=["Carlos","Amoret"];

function filterU(users,blackList) {

    let passUsers=[];
    
    users.filter(element => {
        
       
        if(!blackList.every(x => {return blackList.includes(element);})){

            passUsers.push(element)
        }
           

        

        
    });
        
    
    return passUsers;
    
}
console.log(filterU(users,blackList))