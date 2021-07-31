import * as ActionTypes from './action'

export const newGame = () => ({
    type: ActionTypes.NEW_GAME
})

export const dealCards = () => ({
    type: ActionTypes.DEAL_CARDS
})

export const drawCard = (card, playerIndex) => ({
    type: ActionTypes.DRAW_CARD,
    payload: {
        card,
        playerIndex
    }
})

export const discardCard = (cardIndex, playerIndex) => ({
    type: ActionTypes.DISCARD_CARD,
    payload: {
        cardIndex,
        playerIndex
    }
})