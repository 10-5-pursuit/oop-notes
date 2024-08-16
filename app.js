// OOP: Object Oriented Programming

// Creating a class
// class Animal {
    
// }

// An example of instantiating a new instance of the Date class
// console.log(new Date())


// Creating new instances of our Animal class
// const buttons = new Animal()
// const marshmallow = new Animal()

// console.log(buttons)
// console.log(marshmallow)




// Adding methods to our Animal class. Methods are functions that belong to a class

// Constructor function: function that fires when we make a new instance of a class.
// The instance would get the properties in the constructor w the values set inside of the constructor
// class Animal {
//     constructor(name, type, age, color, walkStyle){
//         this.name = name
//         this.type = type
//         this.age = age
//         this.color = color
//         this.isFriendly = true
//         this.walkStyle = walkStyle
//     }

//     walk(){
//         console.log('Clip clop, clip clop')
//     }
//     run(){
//         console.log('Vrrrr vrrr vrrr')
//     }
//     greet(otherBeing) {
//         console.log(`Sniff sniff, ${otherBeing}`);
//     }
// }


// const buttons = new Animal("Buttons", "turtle", 50,"red", "jiggy")
// const marshmallow = new Animal("Marshmallow", "Axolotl", 25, "green", "swims")
// console.log(buttons)
// console.log(marshmallow)

// buttons.walk()
// buttons.run()
// buttons.greet("Penguin")
// marshmallow.greet('Fluffy')



// Default values for properties
class Animal {
    constructor(name, type, age, color, walkStyle, isFriendly=true){
        this.name = name
        this.type = type
        this.age = age
        this.color = color
        this.isFriendly = isFriendly
        this.walkStyle = walkStyle
    }

    walk(){
        console.log('Clip clop, clip clop')
    }
    run(){
        console.log('Vrrrr vrrr vrrr')
    }
    greet(otherBeing) {
        console.log(`Sniff sniff, ${otherBeing}`);
    }

    sayName(){
        console.log(`Hello my name is ${this.name}`)
        this.walk()
    }

    ageUp(){
        this.age++
    }
}


const buttons = new Animal("Buttons", "turtle", 50,"red", "jiggy")
const marshmallow = new Animal("Marshmallow", "Axolotl", 25, "green", "swims", false)
// console.log(buttons)
// console.log(marshmallow)


// "this" refers to the instance of a class that called the method or property
// console.log(buttons.type)


// marshmallow.sayName() // => prints "Hello my name is Marshmallow" bc "this" is referencing the instance of the Animal class that we assigned to the variable marshmallow. Same thing for the next line.
// buttons.sayName()

// console.log(marshmallow)
// We can update a property of an instance of a class just like we would a regular object
// marshmallow.name = "Mallow"
// console.log(marshmallow)


// "_" in front of a property would denote to another dev that these properties should NOT be manually changed. And ONLY changed via a method that will update that property. Example: this._age should only be changed via a method call.

// marshmallow.ageUp()
// console.log(marshmallow)



// Create a Car class
class Car {
    constructor(make, model, year, color="black"){
        this.make = make
        this.model = model
        this.year = year
        this.color = color
        this._mileage = 0
        // Gas is in miles
        this.gasTank = 100
    }

    driveTo(destination, distance){
        // check if distance is greater than this.gasTank, if it is then we don't have enough gas to go that distance so we can console.log an error message
        if(this.gasTank < distance){
            console.log(`${destination} is too far to go to on only ${this.gasTank} miles of gas`)
        } else {
            console.log(`Sweet we are driving to ${destination}`)
            this._mileage += distance
            this.gasTank -= distance
        }
    }

    fillUpTank = () => {
        this.gasTank = 100
    }
}

const nissan = new Car("Nissan", "Altima", 1974)
const ford = new Car("Ford", "F-150", 2025)
// console.log(nissan)

// nissan.driveTo("Aldi", 10)
ford.driveTo("Bronx Zoo", 74)
ford.fillUpTank()
console.log(ford)


