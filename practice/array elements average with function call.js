function makeAvg(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {

        sum = sum + array[i]

    } return sum / array.length


}


var array = [57, 60, 60];
var average = makeAvg(array);
console.log(average);
