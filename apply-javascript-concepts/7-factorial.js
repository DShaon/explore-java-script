function getFactorial(number) {
    var mul = 1;
    for (var i = 1; i <= number; i++) {
        mul = mul*i;


    } return mul;

}

var inputNumber = 5;
var result = getFactorial(inputNumber);
console.log(result)