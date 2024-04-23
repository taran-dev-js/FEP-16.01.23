const Animal = function (options) {
  this.name = options.name ? options.name : ''
  this.voice = options.voice

  this.makeVoice = function () {
    console.log(`Voice from ${this.name}`)
  }
}

Animal.prototype.makeVoiceProto = function () {
  console.log(`Voice from ${this.name}`)
}

const Cat = function () {
    this.type = 'cat'
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat




const anim = new Animal({})

const cat = new Cat()
cat.type = 'dog'
console.log(cat)

const user = {
    name: 'Alex',
    type: { // sdfsdfsdfsdf
        admin: false,
    },
    // getName: function () {
    //     console.log('name')
    // }
}

// const copyUser = structuredClone(user)
// const copyUser = JSON.parse(JSON.stringify(user))
// const copyUser = {...user}
// const user2 = Object.freeze(user)
// const copyUser = {...user}
// const user2 = Object.seal(user)


// const pass = user.hasOwnProperty('pass') ? user.name : ''



