function numberArray( numbers){
    let newArray = [];
    let x=0;
    for(i=0; i<numbers.length;  i++){
        if(numbers[i] > 0){
            x=numbers[i];
            newArray.push(x);
        }
        else if(numbers[i]< 1){
            break;
            
        }

    }
    return newArray;

}
let numbersList = [122,344,46,677,89,97,566,5667,467,7,-446,675];
let result= numberArray(numbersList);
console.log(result);