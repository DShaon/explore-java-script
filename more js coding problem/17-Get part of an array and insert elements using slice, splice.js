// slice
const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.slice(2,5);
console.log(partial);


// splice
const friend = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// Removes elements from an array and, 
// if necessary, inserts new elements in their place, 
// returning the deleted elements.returns — An array containing the elements that were 
const part = friend.splice(2,7,9,10,11); /* (starting point, how many u want to delete, insert new element in the deleted place ) */
console.log(friend);
