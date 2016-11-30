import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head.jsx';
import Navigasi from './Navigasi.jsx';
import Footer from './Footer.jsx';

ReactDOM.render(<Head/>, document.getElementById('head'));
ReactDOM.render(<Navigasi/>, document.getElementById('nav'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));