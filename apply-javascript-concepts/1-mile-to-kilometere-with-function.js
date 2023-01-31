function milesTOkm(miles) {
    var km = miles * 1.60934;
    return km;
}


var miles = 2;
var result = milesTOkm (miles);
console.log(result);