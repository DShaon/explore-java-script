const phones = [
    { name: 'Samsung', camera: '24mp', storage: '32gb', price: 36000, color: 'red' },
    { name: 'Oppo', camera: '24mp', storage: '32gb', price: 46000, color: 'red' },
    { name: 'Vivo', camera: '24mp', storage: '32gb', price: 56000, color: 'red' },
    { name: 'Xaomi', camera: '24mp', storage: '32gb', price: 26000, color: 'red' },
    { name: 'Oneplus', camera: '24mp', storage: '32gb', price: 86000, color: 'red' },
    { name: 'Redmi', camera: '24mp', storage: '32gb', price: 76000, color: 'red' },
    { name: 'Iphone', camera: '24mp', storage: '32gb', price: 122000, color: 'red' },
]


function getPhone(phones) {
    var cheapestPhone = phones[0];
    console.log(phones[0])
    for (i = 0; i < phones.length; i++) {
        var phone = phones[i];
        if (phone.price < cheapestPhone.price){

            cheapestPhone=phone
        }
    }return cheapestPhone

}



const myPhone = getPhone(phones)
console.log(myPhone);