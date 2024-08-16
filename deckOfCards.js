// Create a deck of cards:
// Cards with a face of 2 - 10, jack, queen, king ace

// Values of cards 2-10 are the same as the face. Jack, queen, and king are worth 10. Ace as a value of 11

// There are 4 sets of 13 cards (hearts, diamonds, spades, clubs)

// The card objects should go in an array

// There should be a method that 'shuffles' the deck. The card objects can be reordered


// Card Class
// - value
// - suit
// - face (jack, queen, king, ace)
class Card {
    constructor(value, suit, face){
        this.value = value
        this.suit = suit
        this.face = face
    }
}

// Creating one instance of the Card class
// const aceOfSpades = new Card(11, "Spades", "Ace")
// console.log(aceOfSpades)

// Deck Class
// - an array of Cards
class Deck {
    constructor(){
        this.cards = this.createDeck()
    }

    createDeck(){
        // Create 52 cards by iterating over all of the suits and creating 13 cards for each
        const suits = ['diamonds', 'hearts', 'spades', 'clubs']
        const faces = ['Jack', 'Queen', 'King', 'Ace']
        const cards = []
        suits.forEach((suit) => {
            for(let i = 2; i <= 14; i++){
                // console.log(suit, i)
                let newCard;
                if(i === 14){
                    newCard = new Card(11, suit, faces[i-11])
                } else if(i > 10){
                    newCard = new Card(10, suit, faces[i-11])
                } else {
                    newCard = new Card(i, suit, i)
                }
                cards.push(newCard)
            }
        })
        return cards
    }

    shuffle(){
        // randomize the order of our cards
        const shuffledCards = []
        while(this.cards.length > 0){
            // Line below gets a random index between 0 and the length of the cards
            const randomIndex = Math.floor(Math.random() * this.cards.length)
            // Then we splice a card out of this.cards using the randomIndex variable and push it to the shuffledCards array
            shuffledCards.push( ...this.cards.splice(randomIndex, 1) )
        }
        this.cards = shuffledCards
    }

}
const casinoDeck = new Deck()
casinoDeck.shuffle()
console.log(casinoDeck)

