import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Drawer = ({ children, modalOpen, toggleDrawer }) => (
  <SwipeableDrawer
    open={modalOpen}
    onClose={toggleDrawer}
    onOpen={toggleDrawer}
  >
    <div
      tabIndex={0}
      role="button"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {children}
    </div>
  </SwipeableDrawer>
);

export default Drawer;
