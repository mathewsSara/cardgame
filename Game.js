class Game {
    constructor() {
        this.players = {}
        this.discardPile = []
        this.oldMaidSuit = 'hearts' // default value
    }
    pickOldMaidSuit(str) {
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
    dealCards(numPlayers) {
        // note that there is no check that numPlayers is a valid number,
        // or that game.players doesn't already exist
        for (let i = 0; i < numPlayers; i++) {
            this.players[i] = new Player
        }
        this.oldMaidSuit = this.pickOldMaidSuit()
        const deck = [...Cards] // this is to avoid mutating the original array
        deck.forEach((card, index) => {
            if(card.value === 12 && card.suit !== this.oldMaidSuit){
                deck.splice(index, 1)
            }
        })
        this.shuffleArray(deck)
        let i = 0
        while (i < deck.length) {
            for (let j = 0; j < numPlayers; j++) {
                if (i < deck.length) {
                    this.players[j].cards.push(deck[i])
                    i++
                }
            }
        }
    }
    shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}