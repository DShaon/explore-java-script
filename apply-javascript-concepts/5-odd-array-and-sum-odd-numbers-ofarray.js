// write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers.

function findOdd(numbers) {

    var oddNumber = [];

    for (var i = 0; i < numbers.length; i++) {
        var elements = numbers[i]
        if (elements % 2 == 1) {
            oddNumber.push(elements)
        }


    } console.log('sorted odd numbers =', oddNumber)

    var oddSum = 0;
    for (var i = 0; i < oddNumber.length; i++) {
        var oddIndex = i
        var oddElements = oddNumber[oddIndex];
        var oddSum = oddSum + oddElements;



    } return oddSum;

}

var array = [3, 3, 3, 3, 4, 4, 4];
var result = findOdd(array);

console.log('sum of all odd numbers =', result);
