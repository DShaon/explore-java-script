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


