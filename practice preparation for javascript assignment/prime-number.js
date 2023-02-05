function isPrimeNumber(number) {
    if (number <= 1) {
        
        return console.log('No, it is not a Prime number');
    }

    let count = 0;

    for (i = 2; i < number; i++) {
        let index = i;
        if (number % index == 0) {
            count++;
            break
        }
    } if (count == 0) {
        console.log('Yes, it is Prime number')

    } else {
        console.log('No, it is not a Prime number');
    }
}
const inputNumber = 8;
const result = isPrimeNumber(inputNumber);

