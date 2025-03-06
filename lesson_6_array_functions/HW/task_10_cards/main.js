// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


const suits = ['spade', 'diamond', 'heart', 'clubs'];

const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];

const colors = {
    spade: 'black',
    clubs: 'black',
    heart: 'red',
    diamond: 'red'
};


const cardDeck = [];

suits.forEach((suit) => {
    values.forEach((value) => {
        if(value !== 'joker') {
            cardDeck.push({
                cardSuit: suit,
                value: value,
                color: colors[suit]
            });
        }
    });
});


console.log(cardDeck);

const reducedCardDeck = cardDeck.reduce((cardObj, cardItem) => {
    switch(cardItem.cardSuit) {
        case 'spade':
            cardObj.spades.push(cardItem);
            break;
        case 'diamond':
            cardObj.diamonds.push(cardItem);
            break;
        case 'heart':
            cardObj.hearts.push(cardItem);
            break;
        case 'clubs':
            cardObj.clubs.push(cardItem);
            break;
    }

    return cardObj;


}, { spades: [],
     diamonds: [],
     hearts: [],
     clubs: []
});

console.log(reducedCardDeck);