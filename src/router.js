import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';

export default (
    <HashRouter>
        <div>
            <Route component={Landing} exact path='/' />
        </div>
    </HashRouter>
)