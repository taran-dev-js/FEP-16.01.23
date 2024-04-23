// const func = (a) => {

//     return (b) => {
//         return a + b
//     }
// }

// const result1 = func(1)(2)
// // const result2 = result1(2) 

// console.log(result1) 

// const plus = (a, b) => a + b

// const funcHOF = (str , func) => {
//     if (!str.trim()) {return []}

//     return [func(1,2)]
// }

// const result = funcHOF(' atr', plus)

// console.log(result)


// const sum = (num) => {
//     if(!num) return 0;
//     console.log(num)
//     return num + sum(--num)
// }

// console.log(sum(2))

(function () {
    const sum = (num) => {
        if(!num) return 0;
        console.log(num)
        return num + sum(--num)
    }

    console.log(sum(2))
})();

// var user = 'user'

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


//   console.log(users.splice(1, 2, 'fal', 'user2'))
//   console.log(users, 'users')

// const arr = ['user1', null, 'user3', 'user3']


// const result = users.filter((item, index) => {
//     const big = +item.balance > 3000
//    if (big) {
//         item.big = true
//    }
//     return big

// })


// const result = users.map(item => {
//     const string = item.address.split(', ')
//     console.log(string)
//     const house = string[0];
//     const city = string[1]

//     return { phone: item.phone, address: item.address, city: city, house: house }
// })

// const result = users.sort((a, b) => {
//     if (a.balance > b.balance) return 1;
//     if (a.balance === b.balance) return 0;
//     if (a.balance < b.balance) return -1;
// })

// ['949 John Street', 'Rose', 'Puerto Rico', '1857'].join(', ')


// const num = [1, 2, 3];

// const result = num.reduce((sum, current) => sum + current)

const usr = '';


const sum = (arg) => {
    arg + ''
}

sum(usr)


// console.log(users)

// console.log(result)

const number = prompt('number ? ')
const city = prompt('city ? ')


if (number === "" || number === null) {
    alert('Error')
}

switch (city) {
    case 'city': 
        alert('sfsf');
}
