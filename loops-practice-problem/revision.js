// variable declaration

// string type variable
var bottle = 'water';
var bottleColor = 'yellow';

// number type variable
var bottlePrice = 120;

// string type variable
var penColor = 'blue';

// boolean type variable
var isExpensive = true;
var isExpensive = false;


// how to put elements in array

// array element should be written into third bracket -> [ ] and string type element should written with double or single Quotation mark. for example -> ['mango', 'apple']; 

var tableItems = ['bottle', 'pen', 'mouse', 'sunglass'];

// find an index number of an array 
var item3 = tableItems[3];

// know length of an array
tableItems.length

// change arrays items. can change  any items of an array  with index number
// 
tableItems[4] = 'notebook';


// can find the index number of an array with 'indexOf' keyword
var penIndex = tableItems.indexOf('pen');



// push-pop--- how to push and how to pop. push mean= add an element into array.pop means =remove an element form array

// push-----------------
var numbers = [10, 20, 30, 54, 87, 98];
numbers.push(89);
console.log(numbers);

// pop---------
var numbers = [10, 20, 30, 54, 87, 98];
// no need to write desire element to removed, pop automatically remove last element form array 
numbers.push();

console.log(numbers);


// comparison variable== '<' '>'  '<=' '>='  '==' '!=' etc

console.log(5 > 6);
// output=true  

console.log(5 < 6);
// output=false


// == means "is equal"
console.log(5 == 5);

// != means "not equal"
// is 5 not equal to 6? output will be true..
console.log(5 != 6);




// multiple conditions '&&'

money1 > money2 && result1 > result2 && height1>height2
// that means>> money1 money2 er cheye boro hoite hobe, ekoi sathe result1 result2 er cheye boro hoite hobe. that means && eita thakle sob condition e true hoite hobe.


money1 > money2 && result1 > result2 || height1>height2
// etar mane hoilo kichu kichu true hoitei hobe othoba kichu false hoileo prob nai.



// *parseFloat parseInt

var num1 = 70.78;
var num2 = 70;

var sum = num1 + num2;
console.log(parseInt(sum));
// console.log(parseFloat(sum));




// ## If else statement

if (4 > 5) {
    console.log("4 is bigger than 5");
  } else {
    console.log("5 is bigger than 4");
  }
  
  // 2nd examaple with condition
  var number = 50;
  if (number % 2 == 0) {
    console.log(" wow its even number");
  } else if (number % 2 == 1) {
    console.log("wow its Oddd number");
  } else {
    console.log("dont knwo whats that ");
  }
  
  // 3rd examaple
  
  // nested condition
  
  var number2 = 30;
  
  if (number2 > 20) {
    if (typeof number2 == "number") {
      console.log("number 2 is a number");
    } else if (typeof number2 == "string") {
      console.log("wow number 2 is string");
    } else {
      console.log("maybe number 2 is boleen");
    }
  } else {
    console.log(" number 2 is very small number please try  bigger then 20");
  }
  
//-=-=-=-=-=-=-=-==-=-=-===-=-=-=-=-=-=-=-=-=-=-=-=-=-
//   !loopsssssssssssssss-------------------

// while loop is used to repeat code until a condition is met.

// declared a variable for running while loop
var roastGiven = 0;

// while loop should be written in -> while(condition){} 
// 4 things need to write and run while loop->
// 1. need Loop variable 
// 2. condition inside while 
// 3.lopp body
// 4. change the loop variable, increament or decreament .


while (roastGiven < 7) {
    console.log('roast pabe');
    // here roastGiven value will increase with 1, and i can use Shorthand to write this type of increasing, example given below - >

    // roastGiven = roastGiven + 1;
    // roastGiven += 1;
    console.log(roastGiven);
    roastGiven++;
}

// ==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// 1-10 all odd number display while loop
var number = 1;

while ( number<=10){
    console.log(number);
    // number=number+2;
    number+=2;
}

// 1-10 all even number display
var number = 0;

while (number <= 100) {
console.log(number);
number+=2;
// number=number+2
}


// number show from 1 - 10

var number = 1;

while (number <= 10) {
    console.log('number');
    console.log(number);
    number++;


    // console.log(number);
}



// for loop-----------------==-=-=-=

for (var roastGiven = 0; roastGiven < 7; roastGiven++) {
    console.log('roast daona plzzzzzzzz')
}


// simple version of for lop
for (var i = 0; i < 7; i++){
    console.log('dannnnnn');
}

// 1 to 10 number display
for(i=1; i<=10; i++){
    console.log(i);
}

// 1 to 10 even number display
for(i=0; i<=10; i+=2){
    console.log(i);
}


// 1 to 10 even number display

for (i=1; i<=10; i+=2){
    console.log(i);
}


// display every element of an array with for loop


// bangla system
var numbers = [45, 87, 89, 56, 32, 51, 25, 52, 68];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
}


// good system
var tableItems = ['bottle', 'pen', 'paper', 'pencil', 'books', 'calculator']

for (var i = 0; i < tableItems.length; i++) {
    var showItems = tableItems[i];
    console.log(showItems);
}



//*--******************************************************
// break and continue =-=-=-=-=-=-===-=-=-=-=-==-=-=-==-=-=-
// this is how breaks work in loop

for (var i = 1; i <= 20; i++) {

    console.log(i);

    if (i > 10) {
        break;
    }

}


// use breaks in while loop

var roastGiven = 0;

while (roastGiven < 7) {
    console.log('roast dao')
    roastGiven++;
    if(roastGiven>4){
        break;
    }
}


// use break im array loops
var tableItems = ['bottle', 'pen', 'paper', 'pencil', 'books', 'calculator']

for (var i = 0; i < tableItems.length; i++) {
    var showItems = tableItems[i];
    if (showItems=='pencil'){
        break;
    }
    console.log(showItems);
}



var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 52, 68];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number>100){
        break;
    }
    console.log(number);
}


// use *"continue"*
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 52, 68];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if(number>70){
        continue;
    }
    console.log(number);
}



//* reverse number from 10 to 1--------------------

var num = 1;

while (num <= 10) {
    console.log(num);
    num++;
}


var num = 10;

while(num >= 1){
    console.log(num);
    num--;
}

for(var i =10; i>=1; i--){
    console.log(i);
}

var i = 0;
for (i=0; i<5; i++){
    console.log(i);
};
console.log(i);
