import { createStore, combineReducers } from 'redux';
import { Reducer } from './reducer'
import { GameReducer } from './game';
import { CardReducer } from './card';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducer: Reducer,
            GameReducer,
            CardReducer,
        })
    )
    return store
}

