// multiple ways to get and set object keys valeu / property
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// multiple ways to get and set object keys valeu / property

var penCount = shoppingCart.pen;
// another way with third bracket
var penCount2 = shoppingCart['pen'];

// 
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue);



// ****************************************************************
// if we want only display all keys/properties
var properties = Object.keys(shoppingCart) 
// console.log(properties);

// if we want only display all keys only values
var propertyValues = Object.values(shoppingCart);
// console.log(propertyValues);




