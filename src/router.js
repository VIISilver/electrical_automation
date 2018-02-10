import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import Team from './components/Team';

export default (
    <HashRouter>
        <div>
            <Route component={Landing} exact path='/' />
            <Route component={Contact} exact path='/contact' />
            <Route component={About} exact path='/about' />
            <Route component={Service} exact path='/service' />
            <Route component={Team} exact path='/team' />
        </div>
    </HashRouter>
)