import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { InboxIcon } from 'icons';

import Header from '../Header/Header';

const menuItems = ['Alpha', 'Beta', 'Gamma', 'Delta'];

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const sideList = (
  <div
  // className={classes.list}
  >
    <List>
      {menuItems.map(text => (
        <ListItem button key={text}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
);

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDrawer = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Fragment>
      <Header
        toggleDrawer={toggleDrawer}
      />
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
          {sideList}
        </div>
      </SwipeableDrawer>
    </Fragment>
  );
};

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
