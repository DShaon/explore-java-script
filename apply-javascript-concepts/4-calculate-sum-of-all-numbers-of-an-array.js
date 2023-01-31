
function findSumOfAnArray(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        var index = i;
        var elements = numbers[index];
        var sum = sum + elements;
        console.log(index,elements,sum)


    }

    return sum;

}


var array = [5, 7, 8, 10, 45, 30];

var result = findSumOfAnArray(array);
console.log(result)