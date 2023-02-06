// first problem--------------------------------------------------

/*short description: This function will take a positive number as a input parameter and will do multiplication with 3 and addition with 10 ,then it will dived by 2 after then subtract from 5 and will return the subtraction */
function mindGame(number) {
    // checking if input is positive or not
    if (number < 0) {
        return 'Bruuh! Please provide a positive number.'
    }

    let mulResult = number * 3;
    let addResult = mulResult + 10;
    let divResult = addResult / 2;
    let subResult = divResult - 5;
    return subResult;
}






// Second problem---------------------------------------------------

/*short description : This function will take a String value as input parameter and will calculate its length and check that the length of the string is "even or odd". if string length dividing by 2 has a remainder of 1 then the string length is "odd" and if not then it is "even" , and then it will return even or odd based on checking.. 
 */

function evenOdd(stringValue) {

    // check if the input value is a string.
    if (typeof stringValue !== 'string') {
        return 'Please give a string value'
    }
    // Calculate the length of the string
    let stringLength = stringValue.length

    // Check if the length is odd or even
    if (stringLength % 2 === 1) {
        return 'odd'
    } else {
        return 'even'
    }

}






// third problem--------------------------------------------------

/*
this function will take a number as a input parameter and the compare it with 7. if the compared result is less than 7, then the number will return its subtraction result..
and if the compaerd result is greater than 7 , then the input number will be doubled and return the doubled value.
*/
function isLGSeven(number) {

    // Subtracting 7 from the input number.
    let subtractedResult = number - 7;

    // Checking if subtracted result is less than 7.
    if (subtractedResult < 7) {
        return subtractedResult;

        // If subtracted result is greater than or equal to 7 then doubling the input number.
    } else if (subtractedResult >= 7) {
        let doubledNumber = number * 2;
        return doubledNumber;
    }
}








// fourth problem--------------------------------------------------
/*
this function will take an array as a input . array may contains positive or negative number. and will check if there is any negative or positive numbers. if there is any negative number  then the negative number will count as a badData and return those counted negative numbers as a badData
*/

function findingBadData(array) {

    // Check if the input is an array.
    if (!Array.isArray(array)) {
        return ":-( Oopsss!! Input should be an array.";
    }


    // storing bad data (negative number).
    let badData = 0;

    for (let i = 0; i < array.length; i++) {

        // Check if the element of this array is a number.
        if (typeof array[i] !== "number") {
            return ":-( A little mistake! Array should only conatin numbers";
        }

        let data = array[i]
        // Check if data is negative..
        if (data < 0) {
            badData++;
        }

    } return badData
}










// fifth problem---------------------------------------------------
/* 
This  function takes three inputs, which represent the number of gems three friends has. Then the function calculates the the diamonds each friend has by multiplying "each friend gem with each friedns gem power , and calculates the total number of diamonds by adding three friends total diamond. and then checks -> if the total number of diamonds is greater than 2000, then it returns the total amount of diamonds subtract from 2000. If the total number of diamonds earned is not greater than 2000, the function returns the total number of diamonds.
*/
function gemsToDiamond(friend1gem, friend2gem, friend3gem) {
    // Check if any of the inputs are missing or negative
    if (!friend1gem || friend1gem < 0 || !friend2gem || friend2gem < 0 || !friend3gem || friend3gem < 0) {
        return "Dude, something is not right! give three inputs with a positive number.please!";
    }
    // Gem power of each friend.
    const friend1GemPow = 21;
    const friend2GemPow = 32;
    const friend3GemPow = 43;

    // Calculate the total number of diamonds each friend has.
    let friend1TotalDiamond = friend1gem * friend1GemPow
    let friend2TotalDiamond = friend2gem * friend2GemPow
    let friend3TotalDiamond = friend3gem * friend3GemPow

    // Calculate the total number of diamonds of all three friends.
    let friendsTotalDiamond = friend1TotalDiamond + friend2TotalDiamond + friend3TotalDiamond


    // Check if the total number of diamonds of all three friends are greater than 2000.
    if (friendsTotalDiamond > 1000 * 2) {
        let restOfDiamond = friendsTotalDiamond - 2000;
        return restOfDiamond
    }

    // If not, return the total number of diamonds earned
    return friendsTotalDiamond;
}

