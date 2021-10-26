import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/login' component={LoginPage} />
            </Switch>
        </Router>
    )
}

export default App
