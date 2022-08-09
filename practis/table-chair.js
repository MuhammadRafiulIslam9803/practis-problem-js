function needWood (table, chair, bed){
    let tabl=table*20;
    let chai=chair*50;
    let bedo=bed*90;
    let allWoodCount=tabl+chai+bedo;
    return allWoodCount;
}
let totalWood=needWood(10,20,8);
console.log("Total Wood Need in CFT :",totalWood);