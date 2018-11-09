
// Javascript starts at the top
//


let suits =[
    "Hearts","Clubs","Diamonds", "Spades"
    ]   
let values = [
    'Ace','King','Queen','Jack',
    'Ten','Nine','Eight','Seven',
    'Six','Five','Four','Three','Two'
    ];

function createDeck(){
    let deck = [];
    for( let suitIdx =0; suitIdx <suits.length; suitIdx++){
        for(let valueIdx =0; vlaueIdx < vlaues.length; valueIdx++){
            let card ={
                        suit:suits[suitIdx],
                        value: values[valuesIdx]
            };
            deck.push (card)
        }
    }=
    return deck;
}

functions getCardString(card) {
    return card.value + 'of' + card.suit;
}

function getNextCard(){
    return deck.shift();
}

let card ={}



let deck = createDeck();
let playerCards =[getNextCard(), getNextCard()];

console.log('Welcome to Blackjack');
console.log('You are dealt: ')

console.log(" "+getCardString(playerCards[0]));
console.log(" "+getCardString(playerCards[1]));







//NOTES

//if and else
//switch and case
//lopping




// let card1 = "Ace of Spades";
// let card2 = 'Ten of Hearts';
//Variables store variables
//you declare a variable with the let 

//values
//boolean
//array
//undefined and null
            //if you want to blank out a variable, you set it to null
            
//strings and numbers

//operations
        //actions that we can execute
        
// common built in objects
//math
//date
//string
//number
//symbol

// DOM document object model: how the data of a web page is organized and manipulated 

