import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {store} from "./reducers/reducers";

import {BrowserRouter as Router} from 'react-router-dom';
import "./styles/css/reset.css"
import "./styles/css/main.css"
import "./styles/css/index.css"

import App from './App';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root'),
);
