let items = [
    {name : "Shirt", price : 1500, quantity:"5" },
    {name : "pant", price : 2500, quantity:"4" },
    {name : "Shirt", price : 1500, quantity:"5" },
    {name : "t-shirt", price : 900, quantity:"5" },
    {name : "troujer", price : 1490, quantity:"3" },
    {name : "under", price : 450, quantity:"9" },
    {name : "belt", price : 500, quantity:"2" },
]
function shopping (shoppingItems){
    let totalPrice = 0;
    for(let i=0; i<items.length; i++){
        item = items[i];
        let buy = item.price * item.quantity;
        totalPrice=totalPrice+buy;
    }
    return totalPrice;
}
let totalcost=shopping(items);
console.log("Total Cost :",totalcost);