// how to check an array
const friendsAges = [20, 30, 43, 24,];
console.log(Array.isArray(friendsAges));

// if  i want to check that an array have this element or not
console.log(friendsAges.includes(30));

// concat = concat is used to add an array with another array. example given below
const newFriendsAges = [34, 67]
const concatArray = newFriendsAges.concat(friendsAges);
console.log(concatArray);
