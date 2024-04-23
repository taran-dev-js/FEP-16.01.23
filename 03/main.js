// const num = prompt('num')

// if (num === 1) {
//     console.log('num = 1' ) 
// } else {
//     console.log('else')
// }

// const result = num ? 'num true' : 'num false';

// console.log(result)
let numOrStr = prompt('Input number or string:');
console.log(numOrStr)

switch (null) {
    case numOrStr === null:
        console.log('You canceled');
        break;
    case numOrStr.trim() === '':
        console.log('Empty string');
        break;
    case isNaN(+numOrStr):
        console.log('Number is Ba_NaN');
        break;
    default:
        console.log('OK!')
        break;
}


const arr = ['1',3,5,7,'134']

const deletedEl = arr.splice(0, 1) // ['1']
