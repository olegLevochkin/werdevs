import React from 'react';

import {Header} from './components/components';
import {About, Home} from './pages/pages';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <div className="content">
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} exact/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
