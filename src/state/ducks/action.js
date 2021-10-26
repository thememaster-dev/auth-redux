export const authLogin = (authData) => ({
    type: 'LOGIN',
    payload: authData
})

export const authLogout = (logout) => ({
    type: 'LOGOUT',
    payload: logout
})