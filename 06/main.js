// 'use strict'
// const hello = 'global hello'
// let hi = 'global hi'
// var test = 'global test'

// if (true) {
//     const hello = 'hello from if'
//     let hi = 'hi from if'
//     var test = 'test from if'
//     console.log(hello)
//     console.log(hi)
//     console.log(test)
// }

// function a () {
//     var test = 'test from func'
//     console.log(test)
// }
// a()

// console.log('////////////')

// console.log(hello)
// console.log(hi)
// console.log(test)

// const counter = () => {
//   let count = 0;
//   return () => ++count
// }

// let count = counter() 
// let count1 = count()
// let count2 = count()
// let count3 = count()

// let countFunc = counter()
// let countFunc1 = countFunc()

// console.log(countFunc1, count3);





// console.log(this);

// const getAgeFunck = function () {
//   return this
// }

// const user = {
//   name: 'Alex',
//   age: 23,
//   setAge: function (age) {
//     this.age = age
//   },
//   getAge: getAgeFunck
// }

// console.log(user.getAge());
// console.log(user.getAge());

// const user2 = {
//   name: 'Rex',
//   age: 33,
// }

// console.log( user.setAge.call(user2, 'arg', 'arg2') );
// console.log( user.setAge.apply(user2, ['arg', 'arg2', 'arg3']) );
// const user2GetAge = user.getAge.bind(user2, 'arg', 'arg2')
// console.log( user2GetAge() )

// console.log( user.getAge.call(user2) );
const users = [
  {
    index: 0,
    isActive: true,
    balance: '2226.60',
    name: 'Eugenia Sawyer',
    gender: 'female',
    phone: '+1 (840) 583-3207',
    address: '949 John Street, Rose, Puerto Rico, 1857',
  },
  {
    index: 1,
    isActive: true,
    balance: '2613.77',
    name: 'Pauline Gallegos',
    gender: 'female',
    phone: '+1 (985) 593-3328',
    address: '328 Greenpoint Avenue, Torboy, North Dakota, 6857',
  },
  {
    index: 2,
    isActive: false,
    balance: '3976.41',
    name: 'Middleton Chaney',
    gender: 'male',
    phone: '+1 (995) 591-2478',
    address: '807 Fleet Walk, Brutus, Arkansas, 9783',
  },
  {
    index: 3,
    isActive: true,
    balance: '1934.58',
    name: 'Burns Poole',
    gender: 'male',
    phone: '+1 (885) 559-3422',
    address: '730 Seba Avenue, Osage, Alabama, 6290',
  },
  {
    index: 4,
    isActive: true,
    balance: '3261.65',
    name: 'Mcfadden Horne',
    gender: 'male',
    phone: '+1 (942) 565-3988',
    address: '120 Scholes Street, Kirk, Michigan, 1018',
  },
  {
    index: 5,
    isActive: false,
    balance: '1790.56',
    name: 'Suzette Lewis',
    gender: 'female',
    phone: '+1 (837) 586-3283',
    address: '314 Dunne Place, Bawcomville, Guam, 9053',
  },
];

// const result = users.filter((item, index) => {
//     const big = +item.balance > 3000
//    if (big) {
//         item.big = true
//    }
//     return big

// })
// const user = {
//   name: 'Alex',
//   age: 23,
//   users: users,
//   setAge: function (age) {
//     this.age = age
//   },
//   getFiltredUsers: function () {
//     // console.log(this)
//     return this.users.filter((item) => {
//       const big = +item.balance > 3000
//       if (big) {
//         item.big = true
//       }
//       return big
//     })
//   }
// }

// console.log(user.getFiltredUsers());

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words);
// Expected output: "fox"

// const removeElement = (arr, item) => {
//   // indexOf
// }

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]