class Hand {
    constructor(cards) {
        this.cards = cards || []
    }
    // this checks all cards, intended after hand is drawn
    // this method is probably very inefficient and could be improved
    removeMatches() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i]
            if (card === 'OM') {
                continue
            }
            if (card.includes('10')) {
                const index = this.cards.findIndex(c => {
                    return c.includes('10') && c !== card
                })
                if (index === -1) {
                    continue
                }
                game.discardPile.push(card)
                game.discardPile.push(this.cards[index])
                this.cards.splice(index, 1)
                this.cards.splice(i, 1)
                i--
                continue
            }
            const index = this.cards.findIndex(c => {
                return c.includes(card[0]) && c !== card
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
        if (card === 'OM') {
            return false
        }
        if (card.includes('10')) {
            const index = this.cards.findIndex(c => {
                return c.includes('10')
            })
            if (index === -1) {
                return false
            }
            game.discardPile.push(card)
            game.discardPile.push(this.cards[index])
            this.cards.splice(index, 1)
            return true
        }
        const index = this.cards.findIndex(c => {
            return c.includes(card[0])
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
            // remove player from game
        }
    }
    drawCard(card) {
        const isMatch = this.checkMatchAndRemove(card)
        if (!isMatch) {
            this.cards.push(card)
        }
    }
}