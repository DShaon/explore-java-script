function isLeapYear(year) {
    var remainder = year % 4
    if(remainder==0){
        return 'yes this is leap year'
    }else{
        return 'no this is not a leap year'
    }
}

var inputYear = 1952;
var year = isLeapYear(inputYear);
console.log(year);