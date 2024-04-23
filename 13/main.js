// user.onclick = function () {
//     console.log('click')
// }

// const userElement = document.getElementById('user')

// userElement.addEventListener('click', (event) => {
//     console.log(event);
// })

const handler = function (event) {
    // console.log(this, 'this')
    console.log('event', event.target, event.currentTarget)
}

// document.querySelector('input').addEventListener('focus', handler)

// document.querySelector('div').addEventListener('click', handler)

document.querySelector('p').addEventListener('click', handler)

setTimeout(() => {
    document.querySelector('p').removeEventListener('click', handler)
}, 2000)

// document.querySelector('button').addEventListener('click', (event) => {
//     // event.stopPropagation();
//     console.log('btn click 2 bubling')
//     handler(event)
// })

// document.addEventListener('click', (event) => {
//     console.log(event)
//     const target = event.target
//     const isActive = 'isActive';

//     if(target.tagName != 'TD') {
//         return;
//     }
//     target.classList.toggle(isActive)
//     // if (target.classList.contains(isActive)) {
//     //     target.classList.remove(isActive)
//     // } else {
//     //     target.classList.add(isActive)
//     // }

// });

document.querySelector('input').addEventListener('focus', (e) => {
    console.log('focus')
})

document.querySelector('input').addEventListener('blur', (e) => {
    console.log('blur')
})




