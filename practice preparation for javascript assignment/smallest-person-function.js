function smallestPersonFinder(persons) {
    let smallestPerson = persons[0];

    for (let i = 0; i < persons.length; i++) {
        let index = i;
        let person = persons[index];
        
        if(person.age<smallestPerson.age){

            smallestPerson = person
        }

    }return smallestPerson
}

const persons = [
    { name: 'sakib', age: 30 },

    { name: 'samiul', age: 20 },

    { name: 'sahid', age: 50 },

    { name: 'samin', age: 10 }
]

const result = smallestPersonFinder(persons)
console.log(result)