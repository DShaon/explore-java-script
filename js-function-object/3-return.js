// function add(num1, num2) {
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     // console.log(sum);
//     return sum;
// }
// // add(5, 5);

// var total = add(5, 5);
// // console.log('total', total);

function singaraGiven(money) {

    var singaraPrice = 10;
    var singaraQuantity = money / singaraPrice;
    return singaraQuantity;

}
var total = singaraGiven(500);
console.log(total);