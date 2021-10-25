import moment from 'moment';

const curTime = moment().format('DD MM YYYY');

export const initialState = {
    authData: [
        {
            id: 1,
            role: 'user',
            fullName: 'ariful islam',
            token: `${curTime} user`,
            email: 'abc123@gmail.com',
            password: 'abc123'
        },
        {
            id: 2,
            role: 'admin',
            fullName: 'sabbir ahmed',
            token: `${curTime} admin`,
            email: 'abcd1234@gmail.com',
            password: 'abcd1234'
        },
        {
            id: 3,
            role: 'visitor',
            fullName: 'antor shuvo',
            token: `${curTime} visitor`,
            email: 'abcde12345@gmail.com',
            password: 'abcde12345'
        },
    ],
    authenticate: {
        isAuthenticated: false,
        error: null,
        user: {}
    }
}