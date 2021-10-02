var expect = chai.expect;

describe('Card Functions', function(){
    describe('Card Construction', function(){
        it("Construct a card correctly", function(){
            let motorhead = new Card (1, 4);
            expect( motorhead.description() ).to.equal( "The Ace of Spades" );
            let oneEyedJack = new Card (11, 3);
            expect ( oneEyedJack.description() ).to.equal( "The Jack of Hearts");
        })
    })

    
})

describe('Deck Functions', function(){
    describe('Deck Creation', function(){
        it("Create a 52 item Deck array with Pips 1 - 13 and Suits 1 - 4", function(){
            let deck1 = new Deck();
            expect ( deck1.cards [0] ).to.deep.equal( new Card (1, 1) );
            expect ( deck1.cards [51].description() ).to.equal("The King of Spades");
            expect ( deck1.cards [13].description() ).to.equal("The Ace of Diamonds");
       
        })
    })
})

describe('Player Functions', function(){
    describe('Play Top Card Method', function(){
        it("Get Correct Pip Value for Comparison", function(){
            let p1 = new Player ( "Jack");
            let p2 = new Player ( "Meg");
            let deck1 = new Deck();
            deck1.deal( [p1, p2] );
            //check for expected values without shuffling
            expect ( p1.playTopCard() ).to.equal(1);
            expect ( p2.playTopCard() ).to.equal(2);
            expect ( p1.playTopCard() ).to.equal(3);
            expect ( p2.playTopCard() ).to.equal(4);
        })
    })
})