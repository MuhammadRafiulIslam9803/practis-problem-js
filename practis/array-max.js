function maxHeight ( gaveMe){

    let largest = gaveMe[0];  // ata baire nah dile reapit hbe max er value tai

    for( let i=0; i<gaveMe.length; i++){
        let index =i;
        let element = gaveMe[index];
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;
    
}
    


let arrayHeight = [ 123, 125, 349, 199, 564, 457, 388 ]
let maximum = maxHeight(arrayHeight);
console.log("Maximum Height is :",maximum);