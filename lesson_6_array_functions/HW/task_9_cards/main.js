// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// Створення колоди карт

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

// console.log(cardDeck);


// знайти піковий туз (find)

const aceOfSpades = cardDeck.find((card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);

// - всі шістки (filter)

const sixes = cardDeck.filter((card) => card.value === '6');
console.log(sixes);

// - всі червоні карти (filter)

const redCards = cardDeck.filter((card) => card.color === 'red');
console.log(redCards);

// - всі буби  (filter)

const diamonds = cardDeck.filter((card) => card.cardSuit === 'diamond');
console.log(diamonds);

// - всі трефи від 9 та більше

const clubsCards = cardDeck.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king', 'joker'].includes(card.value));
console.log(clubsCards);
