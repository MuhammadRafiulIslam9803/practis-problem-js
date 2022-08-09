function minHeight ( gaveMe){

    let lowest = gaveMe[0];  // ata baire nah dile reapit hbe max er value tai

    for( let i=0; i<gaveMe.length; i++){
        let index =i;
        let element = gaveMe[index];
        if(element < lowest){
            lowest = element;
        }
        
    }
    return lowest;
    
}
    


let arrayHeight = [ 123, 125, 349, 199, 564, 457, 388 ]
let maximum = minHeight(arrayHeight);
console.log("Minimum lowest Numbere is :",maximum);