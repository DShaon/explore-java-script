var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

var keys = Object.keys(shoppingCart);

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue =shoppingCart[propertyName]

    console.log(propertyName,propertyValue);
}
