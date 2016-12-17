import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import parent from './parent.jsx';
import home from './pages/home.jsx';
import contact from './pages/contact.jsx';

ReactDOM.render((
<Router history={hashHistory}>
    <Route path="/" component={parent}>
        <Route path="/pages/home" component={home}/>
        <Route path="/pages/contact" component={contact}/>
    </Route>
</Router>
), document.body);