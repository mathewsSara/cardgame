const game = {
    players: {},
    discardPile: [],
}

const pickOldMaidSuit = (str) => {
    let oldMaidSuit
    if (str === undefined) {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                oldMaidSuit = 'hearts'
                break
            case 1:
                oldMaidSuit = 'spades'
                break
            case 2:
                oldMaidSuit = 'diamonds'
                break
            case 3:
                oldMaidSuit = 'clubs'
                break
            default:
                oldMaidSuit = 'hearts'
                break
        }
        return oldMaidSuit
    }
    switch (str) {
        case 'hearts':
            oldMaidSuit = 'hearts'
            break
        case 'spades':
            oldMaidSuit = 'spades'
            break
        case 'diamonds':
            oldMaidSuit = 'diamonds'
            break
        case 'clubs':
            oldMaidSuit = 'clubs'
            break
        default:
            oldMaidSuit = 'hearts'
            break
    }
    return oldMaidSuit
}

const dealCards = numPlayers => {
    // note that there is no check that numPlayers is a valid number,
    // or that game.players doesn't already exist
    for (let i = 0; i < numPlayers; i++) {
        game.players[i] = new Hand
    }
    game.oldMaidSuit = pickOldMaidSuit()
    const deck = DECK
    shuffleArray(deck)
    let i = 0
    while (i < deck.length) {
        for (let j = 0; j < numPlayers; j++) {
            if (i < deck.length) {
                game.players[j].cards.push(deck[i])
                i++
            }
        }
    }
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}