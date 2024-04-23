class Hamburger {
    static get SIZE_SMALL() {
        return {
            price: 50,
            calories: 20
        }
    }

    static get SIZE_LARGE(){
        return {
            price: 50,
            calories: 20
        }
    } 

    static get TOPPING_SAUCE() {
        return { 
            price: 15,
            calories: 0
        }
    }

    static get TOPPING_MAYO() {
        return { 
            price: 20,
            calories: 10
        }
    }

    static get STUFFING_CHEESE() {
        return { 
            price: 10,
            calories: 20
        }
    }

    static get STUFFING_SALAD() {
        return { 
            price: 30,
            calories: 10
        }
    }

    static get STUFFING_POTATOE() {
        return { 
            price: '15',
            calories: 5
        }
    }

    addTopping(topping) {
        this.topping.push(topping)
    }

    #calculete(type) {
       return this.topping.reduce((total, current) => total + current[type], 0) + this.size[type] + this.stuffing[type]
    }

    calculeteCalories() {
        return this.#calculete('calories')
    }

    calculetePrice() {
        return this.#calculete('price')
    }

    // calculetePrice() {
    //     const calories = this.topping.reduce((total, current) => total + current.price, 0)
    //     return calories + this.size.price + this.stuffing.price
    // }

}



const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
hamburger.addTopping(Hamburger.TOPPING_MAYO)
hamburger.addTopping(Hamburger.TOPPING_MAYO)

console.log('calories: ', hamburger.calculeteCalories())
console.log('price: ', hamburger.calculetePrice())

console.log('-----------------')

hamburger.addTopping(Hamburger.STUFFING_POTATOE)


// const hello = 'global hello'
// let hi = 'global hi'
// var test = ['global test']

// if (true) {
//     const hello = 'hello from if'
//     let hi = 'hi from if'
//     var test = 'test from if'
//     console.log(hello)
//     console.log(hi)
//     console.log(test)
// }

// function a () {
//     const hello = 'hello from func'
//     let hi = 'hi from func'
//     var test = 'test from func'
//     console.log(hello)
//     console.log(hi)
//     console.log(test)
// }

// a()

// console.log('////////////')

// console.log(hello)
// console.log(hi)
// console.log(test)

// const user = {
//     isVisited: '' 
// }

// const password = !!user.isVisited


// const user = {
//     name: 'name',
// }

// const copyUser = {...user, password: 'password'}

// const { password: copyPassword  } = copyUser

// copyPassword === copyUser.password


// (function() {
//     const user = {
//         name: 'name',
//     }
//     ///[].push 
// })()

// window.addEventListener('DOMContentLoaded', () => {
    
// })