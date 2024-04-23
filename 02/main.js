// const ERROR_MESSAGE = 'error'; 
// const userNameIdDate = 'a';
// const user_name = 'a';

// // const user = null;

// let b = 'a';

// b = 'b1'

// //// types 

// let string = 'string value';
// const number = 12
// const bool = false
// const und = undefined
// const null_null = null

// const user = { // id:123414134
//     userName: 'user name',
//     age: 30
// }


// // console.log(user, 'user')

// const user2 = user // id:123414134

// // obj2 = {
// //     userName: 'user name',
// //     age: 30
// // }

// user2.age = 35

// // obj2 = {
// //     userName: 'user name',
// //     age: 35
// // }

// user.age 
// // console.log(user, 'user')
// // console.log(user2, 'user2')



// const a = {}
// const c = {}

// ///
// const sym = Symbol('test')
// const bigInt = 12312414141241413
// /////



// let userInput = 2

// let userInput2 = ++userInput
// let userInput3 = userInput++
// console.log(userInput2, userInput3)


// if(userPromptValue == 'sum') {

// } else if(userPromptValue == 'min') {

// }

function getFirstName() {
    console.log('getFirstName', 1)
    let firstName = prompt('Enter your firstname')
    // alert(`Hello, ${firstName}! How are you?`)
    // const button = document.getElementById('changeNameButton')
    // button.innerText = `Hey! I'm not ${firstName}! Change first name!`
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded', 2)
getFirstName()

})
window.addEventListener('load', () => {
    console.log('load', 3)
    // console.log(document.querySelector('.test'))
})