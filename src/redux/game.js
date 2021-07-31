import * as ActionTypes from './action'
import Game from '../Game'

export const GameReducer = (state = {game: new Game()}, action) => {
    switch (action.type){
        case ActionTypes.NEW_GAME:
            return {...state, game: new Game()}
        default:
            return state
    }
}