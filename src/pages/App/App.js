import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from '../_pageSections/Main/Main';
import Footer from '../_pageSections/Footer/Footer';
import Menu from '../_pageSections/Menu/Menu';
import './App.css';

const App = () => (
  <Fragment>
    <Router>
      <div className="App">
        <Menu />
        <Body />
        <Footer />
      </div>
    </Router>
  </Fragment>

);

export default App;
