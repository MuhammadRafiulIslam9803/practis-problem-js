let studentsName = [ "abul", "kabul", "dabul", "habul", "nabul","abul",
"habul", "nabul","abul", "kabul", "dabul", ];

function uniquenamecheack ( names){

    let uniqueName = [];
    let len =names.length;

    for(i=0; i < len ;i++){
        let element= names[i];
        if (uniqueName.includes(element) == false ){
            uniqueName.push(element);
        }
    }
    return uniqueName; 
}
const verifiedName = uniquenamecheack(studentsName);
console.log("The Unique Names are : " , verifiedName);