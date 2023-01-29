var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* // display length of an array */
console.log(numbers.length)

/* display an element from an array */
/* an element can easily be displayed bt using Index number */
console.log(numbers[0]) /* here [0] is an index number of array */


// ----------------------------------------------
// display elements of an array 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < numbers.length; i++) {

    var elements = numbers[i] /* here we simply use the method of display element of an array bt using \\ numbers[index_number] */

    console.log(elements)
}








// display even number of an array elements and store them into a new temporary array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; /* first we declare variable and array */
var temp = []; /* here we will store even number */

for (var i = 0; i < numbers.length; i++) {

    var elements = numbers[i] /* here we simply use the method of display element of an array bt using \\ numbers[index_number] */
    if(elements%2==0){
        temp.push(elements)
    }
}    console.log(temp)


