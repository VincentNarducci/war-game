class Card {
    static pipwords = ['Ace', 'Deuce', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']
    static suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

    constructor(pips, suit){
        this.pips = pips;
        this.suit = suit;
    }

    description(){
        return ('The ' + Card.pipwords[this.pips -1 ] + ' of ' + Card.suits[this.suit -1 ]);
    }
}

class Deck {

constructor(){
this.cards = [];
this.populate();
}

/* push numbers to the cards array
pips: 1 - 13, suit: 1 - 4 */
populate(){
    for (let i = 1; i <= 4; i++){
        for (let n = 1; n <= 13; n++){
   this.cards.push( new Card(n,i)) 
}
    }
}

report(){
    console.log(this.cards);
    for ( let i = 0; i < this.cards.length; i++ )
        console.log(Card.pipwords[this.cards[i].pips -1 ] + " of " + Card.suits[this.cards[i].suit -1 ]);
    }

shuffle(){
    for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
      console.log("The deck has been shuffled");
}

deal( players ){
// deal all the cards using modulus to cycle between any number of players
     for ( let i = 0; i < this.cards.length; i++ ){
        players[(i % players.length)].hand.push(this.cards[i]);
        }
        console.log("The cards have been dealt");
    }
}

class Player {
constructor(name){
    this.name = name;
    this.hand = [];
    this.points = 0;
}

reportHand(){
    console.log(this.hand);
    for ( let i = 0; i < this.hand.length; i++ ) {
console.log( Card.pipwords[this.hand[i].pips -1 ] + " of " + Card.suits[this.hand[i].suit -1 ] );
}
}

// take out the card at index zero and return the pip value for it
playTopCard(){
   let topCardPip = this.hand.shift();
   return topCardPip = topCardPip.pips;
}

awardPoint(){
    this.points++;
}

}

function playWar(){
// check a single card
// let motorhead = new Card(1, 4);
// console.log(motorhead.description());

// declare the players
let p1 = new Player("Mario");
let p2 = new Player("Luigi");
console.log("WAR: " + p1.name + " vs. " + p2.name);

let deck1 = new Deck();
//check that a new deck generates properly
// deck1.report();

// shuffle the deck and maybe check it again
deck1.shuffle();
// deck1.report();

// deal the cards
deck1.deal( [p1, p2] );

// check the players hands and display cards as the correct card strings
// p1.reportHand();
// p2.reportHand();

console.log("Let the games begin!");
// take the pip value of the top card and compare them to each other for the 26 turns of the game
let draws = 0;
for ( i = 0; i < 26; i++ ){
    let a = p1.playTopCard();
    let b = p2.playTopCard();
    if ( a === 1 && b !== 1){
        p1.awardPoint();
    }   else if ( b === 1 && a !== 1 ){
        p2.awardPoint();
    }   else if ( a > b ){
        p1.awardPoint();
    }   else if ( b > a ){
        p2.awardPoint();
    } else draws++;
    }

// print the results to the console
console.log(p1.name + ": " + p1.points + " Points" + " | " + p2.name + ": " + p2.points + " Points" + " | Draws: " + draws);

if ( p1.points > p2.points ){
    console.log(p1.name + " Wins!");
} else if ( p2.points > p1.points ){
    console.log(p2.name + " Wins!");
} else console.log("It's a Tie...");
console.log("--------------------");
}

playWar();
playWar();
playWar();
