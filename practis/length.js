let nameOfFriend = [ "alimul gaja khor ", "akramul vai", "sebok hindu", "nurnobi juya kele", "sojib soto",];
function bestfriend (friendName){
    let bestLength =0;
    let bestName=0;
    for (i=0; i<friendName.length; i++){

        if( friendName[i].length > bestLength){
            bestLength=friendName[i].length;
            bestName=friendName[i];

        }
    }
    return bestName;
}
let result = bestfriend(nameOfFriend);
console.log(result);