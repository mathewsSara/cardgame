import * as ActionTypes from './action'
import Game from '../Game'

export const Reducer = (state = {}, action) => {
    let newState, player, game
    switch (action.type){
        case ActionTypes.NEW_GAME:
            state = {...state, game: new Game(action.payload)}
            return state
        case ActionTypes.DEAL_CARDS:
            // this spread is necessary for immutability
            newState = {...state}
            newState.game.dealCards()
            return newState
        case ActionTypes.DRAW_CARD:
            player = state.game.players[action.payload.playerIndex]
            player.drawCard(action.payload.card)
            return state
        case ActionTypes.DISCARD_CARD:
            state.game.players[action.payload.playerIndex].cards = 
                state.game.players[action.payload.playerIndex].cards
                    .slice(0, action.payload.cardIndex)
                    .concat(
                        state.game.players[action.payload.playerIndex].cards
                            .slice(action.payload.cardIndex + 1)
                    )
            return state
        case ActionTypes.PASS_TURN:
            // game = {...state.game}
            // game.currentTurn++
            // if(game.currentTurn >= game.numPlayers){
            //     game.currentTurn = 0
            // }
            // newState = {...state, game}
            // return newState
            state.game.currentTurn++
            if(state.game.currentTurn >= state.game.numPlayers){
                state.game.currentTurn = 0
            }
            return state        
        default:
            return state
    }
}
