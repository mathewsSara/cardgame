import { createStore, combineReducers } from 'redux';
import { GameReducer } from './game';
import { CardReducer } from './card';

export const ConfigureStore = () => {
    const store = createStore(
        GameReducer
    )
    return store
}

