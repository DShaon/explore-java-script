function reverseMaker(string) {
    var reverse = '';
    for (var i = string.length - 1; i >= 0; i--) {

        var reverse = reverse + string[i]


    } return reverse;


}


var inputString = 'bangladesh';
var reverseString = reverseMaker(inputString);
console.log(reverseString)
