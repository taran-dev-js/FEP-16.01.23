

// const user = localStorage.getItem('user')

// console.log(JSON.parse(user));

// for(let i=0; i < localStorage.length; i++){
//     console.log(localStorage.key(i), 'key')
//     console.log(localStorage.getItem(localStorage.key(i)), 'value')
// }

// ul.addEventListener('click', () => {
//     const obj = {
//         name: 'user name123'
//     }
    
//     localStorage.setItem('user3', JSON.stringify(obj))
//     sessionStorage.setItem('user', 'userID')
// })

// window.addEventListener('storage', (event) => {
//     console.log(event)
// })


const xml = new XMLHttpRequest();

xml.open('GET', 'https://jsonplaceholder.typicode.com/posts')
xml.setRequestHeader('test-type', 'test-type-2')
xml.setRequestHeader('Content-Type', 'application/json')
xml.send()

xml.addEventListener('load', (event) => {
    console.log(JSON.parse(event.target.response));
})

xml.addEventListener('error', (event) => {
    console.log(event);
})

xml.addEventListener('progress', (event) => {
    console.log(event, 'progress');
})

// xml.timeout = 1

xml.responseType = 'json'

function (one, two)

