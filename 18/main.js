// const promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(3), 3000)
//     // setTimeout(() => reject(new Error('some error')), 3000)

// })

// console.log(promise);
// promise
//     .then(res => { 
//         console.log(res, '1 then'); 

//         return new Promise((resolve, reject) => setTimeout(() => resolve(res+1), 1000))
//         // return 2
//     })
//     .then(res => console.log(res, '1 then'))
//     .catch((err) => console.log(err));


const user = {
    name: 'user'
};

// fetch('https://jsonplaceholder.typicode.com/posts/2', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify(user)
// })
//     .then(res => {
//         if(!res.ok) {
//             throw Error('Error fetch posts!')
//         }
//         return res.json()
//     })
//     .then(data => {
//         return fetch(`url/${data.id}`).then(res => res.json())
//     })
//     .then (data => data)
//     .catch(err => {
//         console.error(err, 'catch')
//     })

    const func = async () => {
  
        const fetch2 = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
                const postData = await res.json();

                const req2 = await fetch(`url/${postData.id}`);
                const req2Data = await req2.json();

                return {
                    postData, req2Data
                }
            } catch (error) {
                console.log(error)
                return 'error'
            }
            
        }

        let res = await fetch2() 

        console.log(res)
    }

    // func()
const urls = [
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
]

// const requests = urls.map(item => fetch(item))


// Promise.all(requests)
// .then(res => Promise.all(res.map(response => response.json())))
// .then(data => console.log(data))


const func2 = async () => {
    const [post2, post3] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/2'),
        fetch('https://jsonplaceholder.typicode.com/posts/3')
    ])
    
    const data2 = await post2.json();
    const data3 = await post3.json();
    
    return {
        post2: data2,
        post3: data3
    }
}

// func2().then(res => console.log(res))
// console.log()




// animal.up().up()
// function loadScr(src) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');

//         script.src = src

//         script.onload = () => resolve(script)
//         script.onerror = () => reject(new Error('Fail!!'))

//     })
// }

// const promise = loadScr('url')

// promise
// .then(scr => console.log(scr))
// .catch(err => console.log(err))

// document.get()

// https:127.0.0.1:5501/18/index.html?redirect='/login?translate=true?afterLoginUrl='/home''


//login 
// https:127.0.0.1:5501/login?translate=true?afterLoginUrl='/home'

// window.location.assign(afterLoginUrl)


 $('li').on('click', (e) => {
    console.log('click', e)
});