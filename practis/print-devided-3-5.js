for( let i=1; i<100; i++){
    let number= i;

    if (number%3==0  && number%5== 0){
        console.log("It is possible with devded by 3 and 5 ");            
    }

    else  if (number%3 == 0){
        console.log("It is possible with devded by 3 ");            
    } 
    
    else if (number%5 == 0){
        console.log("It is possible with devded by 5 ");            
    }
    
    else{
        console.log(number);
    }
}
