// Math.round((Math.random() * 10))

const date = '2024/02/19'

const day = new Date(date).getDay()
const weekArr = ['Понеділок', 'Вівторок']

weekArr[day - 1]


const data = `{
    "name": "e",
    "pass": false,
    "power": {
        "pass": false
    },
    "active": [
        {
            "name": "Super"
        }
    ],
    "dev": ["test", "dev" ]
}`

class MyError extends Error {

}
let loader = false;

try {
    loader = true

    console.log('before json')
    const user = JSON.parse(data)

    // user.dev.map((item) => {
    //     try {
    //         if(item === 'dev') {
    //             throw new MyError('Name undefined!!')
    //         }
    //     } catch (e) {
            
    //     }
    // })
    
    if(!user.name) {
        throw new MyError('Name undefined!!')
    }

    // if(!user.fixed) {
    //     throw new SyntaxError('fixed not found!!')
    // }

    console.log(user)
    console.log('after json')
} catch (error) {
    if (error instanceof MyError) {
        console.log('=======MyError======', error)
    }

    if (error instanceof SyntaxError) {
        console.error(error, '======SyntaxError=======')
    }
} finally {
    console.log('finally')
    loader = false
}

console.log('LAST JSON LOG')

