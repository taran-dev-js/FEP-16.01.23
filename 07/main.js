// const user = () => {
//   return this
// }

// function user2 () {
//   return this
// }

// // console.log(user());
// // console.log(user2());

// const dog = {
//   name: 'Rex',
//   run: () => {
//     [1].map(function() {
//       console.log(this, '() => ')
//     })
//   },
//   run2: function () {
//     console.log(this, 'function')
//   }
// }

// dog.run()
// dog.run2()

// const Animal = function (options) {
//   this.name = options.name
//   this.voice = options.voice

//   this.makeVoice = function () {
//     console.log(`Voice from ${this.name}`)
//   }
// }

// Animal.prototype.makeVoiceProto = function () {
//   console.log(`Voice from ${this.name}`)
// }


// const dog = new Animal({ name: 'Rex', voice: true })
// const cat = new Animal({ name: 'Alex', voice: false })
// cat.makeVoiceProto()
// // dog.makeVoice()

// console.log(dog, cat)

class Animal {
  constructor(name, voice) {
    this.name = name
    this.voice = voice
  }

  height = '23'
  
  // makeVoice2 = function () {}
  makeVoice() {
    console.log(`Voice from ${this.name}`)
  }
}

class Cat extends Animal {
  constructor(name, voice) {
    super(name, voice)
    
    this.data = this.getData()
  }

  height = ''
  weight = ''

  static color = ''

  set weight (weight) {
    this.weight = weight
  }

  get weight() {
    return this.weight
  }

  setHeight(height) {
    this.height = height
    Cat.toStr()
  }

  getHeight() {
    return this.height
  }
  
  getData() {
    return ['','']
  }

  sound() {
    return Cat
  }

  static toStr() {
    console.log(this)
    // console.log(`${this.name}, ${this.height}`)
  }
}

const animal = new Animal('Rex', true)

const cat = new Cat('Alex', false )
// cat.setHeight('10')
// cat.weight = '22'
// console.log(cat.sound())
// Cat.toStr()

// console.log(cat.weight)

// console.log(animal)
// console.log(cat, 'cat')

