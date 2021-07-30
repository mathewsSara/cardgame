import * as ActionTypes from './action'

export const Reducer = (state = {}, action) => {
    switch (action.type){
        case ActionTypes.ACTION:
            return {...state}
        default:
            return state
    }
}