// declare objects with multiple properties


var student = {
/* keys| |value
     ^  |  ^    */
    id: 13434,
    name: 'Sabbir Ahmed Shaon',
    class: 10,
    marks: 90
}

var mobile = {
    brand: 'Oneplus',
    price: 80000,
    storage: '256gb',
    camera: '40mp'
}

var myComputer = {
    brand:'intel',
    price: 70000,
    color:'white',
    processor: 'corei5-10thgen'
}

// eivabe console.log dile full properties display kore
console.log(student);



// eivabe console.log dile oi object er shudhumatro je property ta jante chawa hoy sei property show korbe
console.log(student.class);
console.log(myComputer.brand);

myComputer.price= 90000; /* eivabe keys er value o change kora jay */
console.log(myComputer.price);