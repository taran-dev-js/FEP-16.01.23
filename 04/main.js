// let i = 0;

// do {
//     console.log(i, 'do while')
//     i++
// } while (i < 3);

// let b = 0
// let sum = 0

// while (true) {
//     let num = prompt('name?')
//     console.log(num, 'before')
//     if (!num) break 
//     console.log(num, 'after')
//     sum = num + num
// };

// ouside: for (let i = 0; i < 3; i++) {
//     console.log(i, '1')

//     for (let j = 0; j < 3; j++)  {
//         console.log(j, '2----------')
//         if (i === 1) break ouside
//     }
    
// }




const myFunc2 = function (a, b) {
    return a * b
}

const myFunc3 = (a, b) => {
    a * b
}
const obj = { key: 2 }
function myFunc (a, b = obj) {
    const result = a + b.key
    return result
}

const a = 1

const result = myFunc(a, { 
    key: myFunc2(2, 3) 
});

let message = 'test'

message += ' text 2 '

// const result2 = myFunc2(2, 2);
// const result3 = myFunc3(1, 3);

console.log(message)
