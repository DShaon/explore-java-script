function reverseMaker(string) {
    var reverse = [];

    const splitString = string.split(' ')
    for (var i = splitString.length - 1; i >= 0; i--) {
        var elements = splitString[i]

        reverse.push(elements)
        var joinnn = reverse.join(' ')

    } 

    return joinnn;


}


var inputString = 'bangladesh is a country';
var reverseString = reverseMaker(inputString);
console.log(reverseString)

// const characterSplit = lyrics.split(' ')
