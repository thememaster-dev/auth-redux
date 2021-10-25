import { initialState } from './initialState';

export const authData = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return action.payload;
        case 'log-out':
            return state;
        default:
            return state
    }
}