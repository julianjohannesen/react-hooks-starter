import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MenuIcon, IconButton } from 'icons';

import './Header.css';

const Header = ({ toggleDrawer, modalOpen }) => (
  <Fragment>
    <header className="Header__header">
      <AppBar
        position="fixed"
        // className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer}
            // className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
          React Hooks Starter
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  </Fragment>
);

export default Header;
