// average mark of three assignment

function getAverage(assignment1, assignment2, assignment3){

    var totalMarks=assignment1+assignment2+assignment3;
    var average = totalMarks/3;
    return average;
}

var averageMarks = getAverage(60,58,59); 
console.log('Average mark of assignment is =', averageMarks);

// addition in different way, ami dekhle bujhte parbo
function add(num1, num2){
    var sum= num1+num2;
    return sum;
}

var result1 = add(12,13);
var result2 = add(35,7);
var finalResult= add(result1,result2);
console.log(finalResult);