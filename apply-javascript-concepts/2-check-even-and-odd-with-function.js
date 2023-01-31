function isEvenOrOdd(numbers) {
    var remainder = numbers % 2;
    if(remainder==0){
        return true;
    }else{
        return false;
    }
}

var inputNumber = 99;
var result = isEvenOrOdd(inputNumber);
console.log('this number is even:', result);