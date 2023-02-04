const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'belt', price: 600, quantity: 3 }
]

function totalCost(products) {
    // let mul = 0;
    let sum =0;
    for (let i = 0; i < products.length; i++) {

        var product = products[i]
         var mul = product.price * product.quantity
         sum = sum+mul
        
        }return sum;
        


}


const shoppingListCost = totalCost(shoppingCart);
console.log(shoppingListCost)