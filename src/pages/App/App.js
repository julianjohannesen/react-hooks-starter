import React, { Fragment } from 'react';
import Body from "../_pageSections/Main/Main";
import Footer from '../_pageSections/Footer/Footer';
import Header from "../_pageSections/Header/Header";
import Menu from '../_pageSections/Menu/Menu';
import './App.css';

const App = () => (
  <Fragment>
    <div className="App">
      <Header />
      <Menu />
      <Body />
      <Footer />
    </div>
  </Fragment>
)

export default App;
