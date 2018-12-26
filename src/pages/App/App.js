import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PageStructure from '../PageStructure/PageStructure';

const App = () => (
  <Fragment>
    <Router>
      <PageStructure />
    </Router>
  </Fragment>
);

export default App;
