const names = ['abul', 'abul', 'babul', 'babul', 'cabul', 'dabul', 'ebul', 'abul', 'babul']

function removeDuplicate(names) {
    const unique = [];

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false){

            unique.push(name);
        }
    }console.log(names)
    return unique;


}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);