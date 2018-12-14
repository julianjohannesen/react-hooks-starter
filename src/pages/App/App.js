import React, { Fragment } from 'react';
import Body from '../_pageSections/Main/Main';
import Footer from '../_pageSections/Footer/Footer';
import Menu from '../_pageSections/Menu/Menu';
import './App.css';

const App = () => (
  <Fragment>
    <div className="App">
      <Menu />
      <Body />
      <Footer />
    </div>
  </Fragment>
);

export default App;
