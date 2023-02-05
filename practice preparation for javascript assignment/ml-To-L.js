// এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে।



/* Formula	
divide the volume value by 1000 */

function mlToLConverter(ml) {

    let liter = ml / 1000;
    return liter
}

const mlInput = 1045;
const result = mlToLConverter(mlInput)
console.log(result + ' Liter')