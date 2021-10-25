import { createStore } from 'redux';
import { authData } from './ducks/reducers';

export default function configureStore() {
    return createStore(
        authData,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}