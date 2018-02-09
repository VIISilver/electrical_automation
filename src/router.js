import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Contact from './components/Contact';

export default (
    <HashRouter>
        <div>
            <Route component={Landing} exact path='/' />
            <Route component={Contact} exact path='/contact' />
        </div>
    </HashRouter>
)