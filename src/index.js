import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './Components/App/App.js';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

const app = <Provider store = {store}>
                <App />
            </Provider>

ReactDOM.render(app, document.getElementById('root'));