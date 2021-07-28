class Hand {
    constructor(cards){
        this.cards = cards || []
    }
    checkMatches(cards){
        for(let i = 0; i < cards.length; i++){
            // code for checking matches
        }
    }
    checkMatch(card){
        if(card === 'OM'){
            return false
        }
        if(card.inclues('10')){
            // check for 10s
            // return true or false
            return
        }
        // check for matches with card[0]
    }
    discardCards(card1, card2){
        let index = this.cards.indexOf(card1)
        this.cards.splice(index, 1)
        index = this.cards.indexOf(card2)
        this.cards.splice(index, 1)
        if(!this.cards.length){
            // remove player from game
        }
        // code for discard pile?
    }
}