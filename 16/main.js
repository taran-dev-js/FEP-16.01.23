// import { usr, showUser as showUserFunc } from './user.js'

// console.log(showUserFunc());
// usr.lastName = 'lastName';
// console.log(showUserFunc());

const map = new Map()

const user = {
    name: 'Alex'
}

const user2 = {
    name: 'Alexw'
}

const data = [1,2,4,6]

map.set(2, 'false')
map.set('str', false)
map.set(true, ['false'])
map.set(user, data)
map.set(user2, user)

// console.log(map.values())

// for (let item of map.keys()) {
//     // console.log(item);
// }

const set = new Set()

set.add(user)
set.add(user2)
set.add(user)
set.add(true)
set.add(true)

// for (let item of set) {
//     console.log(item);
// }

// set.forEach(item => console.log(item))

// const obj = {}

// const arr = [1, obj];

// arr = null;

// const weakMap = new WeakMap()
// const weakSet = new WeakSet()
