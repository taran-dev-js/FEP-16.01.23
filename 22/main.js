// const func = (prop1, prop2, ...rest) => {
//     console.log('rest', ...rest);
//     console.log(prop1, prop2)
// } 

// func(1,2,4, 34)

// const arr = [1,3]
// const arr2 = [...arr, ...[2,4,6]] 
// const admin = {
//     fname: 'admin',
//     lastName: 'last',
//     visit: {
//         admin: true
//     }
// }

// let { fname: myFname, lastName: myLastName, visit: { admin: myAdmin } } = admin
// visit.admin = false
// console.log(visit)
// console.log(admin.visit)

// const arr = ['str', 2, [1,3]]

// const [str23, number, myArr] = arr

// function* genFunc (i) {
//     yield i
// }


// function* myFunc (n=5) {
//     // for (let i = o; i < n; i++) {
//     //     yield i
//     // }
//     yield* genFunc(23) 
//     yield 3
//     return 5
// }

// const gen = myFunc();
// gen.next()

const iterator = {
    [Symbol.iterator](n = 4) {
        let i = 0;
        return {
            next() {
                if (i < n) {
                    return { value: i++, done: false }
                }
                return { value: undefined, done: true }
            }
        }
    }
}


// for (let i of iterator) {
//     console.log(i)
// }

const usr = {
    age: 23,
    admin: false,
    // comments: () => {}
}

const arr = usr.comments?.()
