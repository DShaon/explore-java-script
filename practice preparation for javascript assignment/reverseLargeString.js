function reverseName(nameOn, nameTwo) {
    let nameOneLength = nameOn.length
    let nameTwoLength = nameTwo.length
    let largestName = '';
    if (nameOneLength > nameTwoLength) {
        largestName = nameOn;
    } else {
        largestName = nameTwo;
    } console.log(largestName);

    let reverseName = '';

    for (let i = largestName.length - 1; i >= 0; i--) {
        let reverseString = largestName[i];
        reverseName = reverseName + reverseString
        
    }
    return reverseName

}


let result = reverseName("Joh", "Alexis");
console.log(result);