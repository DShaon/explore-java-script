// // তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

// function friends(name) {
//     for (i = 0; i < name.length; i++) {
//         var ff = name[0];
//         var friend = name[i];

//     }
//     if(ff.length>friend.length){
//         console.log(ff);
//     }else{
//         console.log(friend)
//     }
    

// }


// const myFriends = ['saj', 'mashrur','sadia','a'];
// const reverseBigName = friends(myFriends);
// // console.log(reverseBigName);

// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],
   
//     crust: 'deep dish',
   
//     serves: 2
   
//    }

//    console.log(pizza.toppings);
   
function findSecondLargest(arr) {
    let first = 0;
    let second = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i]
      if (number > first) {
        second = first;
        first = number
      } else if (number > second && number < first) {
        second = number
      }
    }
    
    return second;
  }

  const inputArray = [95,90,70,80,60,100];
  const secondLargest = findSecondLargest(inputArray);
  console.log(secondLargest);
  
  