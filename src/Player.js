class Player {
    constructor(cards) {
        this.cards = cards || []
    }
    // this checks all cards, intended after hand is drawn
    // this method is probably very inefficient and could be improved
    removeMatches() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i]
            if (card.value === 12) {
                continue
            }
            const index = this.cards.findIndex(c => {
                return c.value === card.value && c !== card
            })
            if (index === -1) {
                continue
            }
            this.discardCards(card, this.cards[index])
            i--
        }
    }
    // this checks for matches only with one card, intended after drawing a card
    checkMatchAndRemove(card) {
        if (card.value === 12) {
            return false
        }
        const index = this.cards.findIndex(c => {
            return c.value === card.value
        })
        if (index === -1) {
            return false
        }
        game.discardPile.push(card)
        this.discardCards(this.cards[index])
        return true
    }
    discardCards(card1, card2) {
        let index = this.cards.indexOf(card1)
        game.discardPile.push(this.cards[index])
        this.cards.splice(index, 1)
        if (card2) {
            index = this.cards.indexOf(card2)
            game.discardPile.push(this.cards[index])
            this.cards.splice(index, 1)
        }
        if (!this.cards.length) {
            removePlayer()
        }
    }
    drawCard(card) {
        const isMatch = this.checkMatchAndRemove(card)
        if (!isMatch) {
            this.cards.push(card)
        }
    }
    removePlayer(){
        // remove player from the game
        console.log('removePlayer was called, but its not doing anything yet');
        // check if only one player remains
    }
}