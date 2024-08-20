// constructor function: is the function that gets called/invoked when we create an instance of our class. Constructor holds all the properties that we give each new instance of a class. Some of these property values can come from our params

// this: keyword in JS that references scope. In the context of a class, "this" would reference any instance (referencing themselves).

// a class is an object factory, and it acts as a blueprint for what each instance made by that class will be(properties and methods)
class Gladiator {
    constructor(name, weapon, matches, livingStatus=true){
        this.name = name
        this.weapon = weapon
        this.matches = matches
        this.livingStatus = livingStatus
        this._hp = 100
    }

    warCry(){
        const battleCries = [
            `RAWRRRR. I am ${this.name}, the chosen one!`,
            `I am ${this.name}, ARE YOU NOT ENTERTAINED?!`,
            `YERRRRRRRP, name's ${this.name}`,
            `${this.name} IS HERE! Prepare for battle!`
        ]
        const randomNumber = Math.floor(Math.random() * battleCries.length)
        console.log(battleCries[randomNumber])
    }

    taunt(opponent){
        console.log(`Hey ${opponent.name}, I will kick your behind, bc I am ${this.name}!!! I got ${this.matches.wins} win(s)`)
    }

    basicAttack(opponent){
        console.log(`${this.name} uses ${this.weapon}, and attacks ${opponent.name}.`)
        const damage = Math.floor(Math.random() * 20)
        opponent._hp -= damage
        console.log(`${this.name}'s HP: ${this._hp}`)
        console.log(`${opponent.name}'s HP: ${opponent._hp}`)
    }

    finisher(opponent){
        console.log(`${this.name} uses their ULTIMATE ATTACK against ${opponent.name}!`)
        opponent._hp -= opponent._hp
        this.matches.wins += 1
        opponent.matches.losses += 1
        opponent.livingStatus = false
        console.log(`${opponent.name} has been defeated. ${opponent.name}'s HP is 0.`)
        this.warCry()
        console.log(`${this.name}'s record now: `, this.matches)
    }
}
const crixus = new Gladiator('Crixus', "sword", { wins: 10, losses: 0 })
const serena = new Gladiator('Serena', "mace", { wins: 2, losses: 0 })

// console.log(crixus)

// crixus.warCry()
// serena.warCry()

// serena.taunt(crixus)

// serena.basicAttack(crixus)

// serena.finisher(crixus)


class Arena {
    constructor(name){
        this.name = name
        this.fighters = []
    }

    enterArena(fighter, opponent){
        this.fighters.push(fighter)
        fighter.taunt(opponent)
    }

    fightToDeath(){
        console.log(`Announcing our gladiators:\n${this.fighters[0].name} VS ${this.fighters[1].name}\nFIGHTTTTTT!`)
        let winner;
        const randomNum = Math.random()
        if(randomNum < .5){
            winner = this.fighters[0]
        } else {
            winner = this.fighters[1]
        }
        console.log(`${winner.name} is victorious!`)
        winner.warCry()
        this.fighters = []
    }
}

const colloseum = new Arena('Roman Colloseum')

colloseum.enterArena(crixus, serena)
colloseum.enterArena(serena, crixus)
// console.log(colloseum)

colloseum.fightToDeath()


