export const initialState = {
    authData: [
        {
            id: 1,
            role: 'user',
            fullName: 'ariful islam',
            token: '',
            email: 'abc123@gmail.com',
            password: 'abc123'
        },
        {
            id: 2,
            role: 'admin',
            fullName: 'sabbir ahmed',
            token: '',
            email: 'abcd1234@gmail.com',
            password: 'abcd1234'
        },
        {
            id: 3,
            role: 'visitor',
            fullName: 'antor shuvo',
            token: '',
            email: 'abcde12345@gmail.com',
            password: 'abcde12345'
        },
    ],
    authenticate: {
        isAuthenticated: false,
        error: null,
        user: null
    }
}