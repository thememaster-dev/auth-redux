import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { authLogin, authLogout } from '../state/ducks/action';

const LoginForm = (props) => {
    const { onSubmit, submittedData, onClick } = props;

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ email, password })
    }

    const onButtonClick = e => {
        e.preventDefault();
        onClick()
    }

    useEffect(() => {

    })

    return (
        <>
            {!submittedData?.authenticate?.isAuthenticated ? <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email Address</label><br />
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" style={{ padding: '8px 6px', marginTop: '4px' }} />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input onChange={(e) => setPassword(e.target.value)} type="text" id="password" name="password" style={{ padding: '8px 6px', margin: '4px 0 10px' }} />
                </div>
                <input type="submit" />
            </form> : <>
                <span>name: {submittedData?.authenticate?.user?.fullName}</span><br />
                <span> role: {submittedData?.authenticate?.user?.role}</span><br />
                <button type="button" onClick={onButtonClick}>logout</button></>
            }
        </>

    )
}

const mapStateToProps = submittedData => {
    return {
        submittedData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (submitData) => dispatch(authLogin(submitData)),
        onClick: (logout) => dispatch(authLogout(logout))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
