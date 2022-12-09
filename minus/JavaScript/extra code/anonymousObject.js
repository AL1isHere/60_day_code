// anonymous objects = objects without a name
//                     not directly referenced
//                     less syntsx. no need for unique names

class Card{
    constructor(value, suit){
        this.value = value
        this.suit = suit
    }
}

let cards = [new Card("A","Hearts"),
             new Card("A","Spades"),
             new Card("A","Diamonds"),
             new Card("A","Clubs"),
             new Card("2","Hearts"),
             new Card("2","Spades"),
             new Card("2","Diamonds"),
             new Card("2","Clubs")]

cards.forEach(cards => console.log(`${cards.value} ${cards.suit}`) )