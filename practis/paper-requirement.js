function paperRequirement(book1, book2, book3){
    let book3PageNeed = 300;
    let book1PageNeed = 100;
    let book2PageNeed = 200;

    const book1TottalPage =  book1PageNeed *book1;
    console.log(book1 ,"Book1 Needeed Page :", book1TottalPage);

    const book2TottalPage = book2PageNeed* book2;
    console.log(book2, "Book2 Needeed Page :", book2TottalPage);

    const book3TottalPage =  book3PageNeed *book3;
    console.log(book3, "Book3 Needeed Page :", book3TottalPage);

    const tottalPageNeed = book1TottalPage+book2TottalPage+book3TottalPage;
    return tottalPageNeed;

    
}
const result= paperRequirement(10,20,30);
console.log("Totall Needed Page :", result);