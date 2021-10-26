import { initialState } from './initialState';

export const authData = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            const loginData = action.payload;
            for (const authenticate in state) {
                if (authenticate === 'authData') {
                    state[authenticate].find((item, index) => {
                        if (item.email === loginData?.email && item.password === loginData?.password) {
                            const token = item.token;
                            const localStorage = window.localStorage;
                            localStorage.setItem('token', token);
                            return Object.assign(state['authenticate'].user, item);
                        }
                    })
                } else if (authenticate === 'authenticate') {
                    state['authData'].map(item => {
                        if (item.email === loginData?.email && item.password === loginData?.password) {
                            state[authenticate].isAuthenticated = true;
                        }
                    })
                }
            }
            return {
                ...state,
            }
        case 'LOGOUT':
            // const logout = action.payload;
            for (const authenticate in state) {
                if (authenticate === 'authData') {
                    state[authenticate].find((item, index) => {
                            const token = item.token;
                            const localStorage = window.localStorage;
                            localStorage.removeItem('token', token);
                    })
                } else if (authenticate === 'authenticate') {
                    state[authenticate].isAuthenticated = false;
                    state[authenticate].user = {};

                }
            }
            return {
                ...state
            };
        default:
            return state
    }
}