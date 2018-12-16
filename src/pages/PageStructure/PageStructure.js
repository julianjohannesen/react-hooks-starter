import React, { useState } from 'react';
import Body from '../_pageSections/Main/Main';
import Footer from '../_pageSections/Footer/Footer';
import Menu from '../_pageSections/Menu/Menu';
import './PageStructure.css';

const PageStructure = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDrawer = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="PageStructure">
      <Menu
        toggleDrawer={toggleDrawer}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <Body
        toggleDrawer={toggleDrawer}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <Footer />
    </div>
  );
};

export default PageStructure;
