import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'navigation/Link';

import { InboxIcon } from 'icons';

import Header from '../Header/Header';

const menuLinks = [
  {
    text: 'Alpha',
    route: 'bubblegum',
  },
  {
    text: 'Beta',
    route: 'shoelaces',
  },
  {
    text: 'Gamma',
    route: 'inbox',
  },
  {
    text: 'Delta',
    route: 'inbox',
  }
];

const ListItemLink = ({ primary, to, children }) => (
  <ListItem button component={Link} to={to}>
    {children && children}
    <ListItemText primary={primary} />
  </ListItem>
);

ListItemLink.propTypes = {
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}; 

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const sideList = (
  <Fragment>
    <div
    // className={classes.list}
    >
      <List>
        {menuLinks.map(menuLink => (
          <ListItem button key={menuLink.text}>
            <ListItemLink
              to={`/${menuLink.route}`}
              primary={menuLink.text}
            >
              <InboxIcon />
            </ListItemLink>

          </ListItem>
        ))}
      </List>
    </div>
  </Fragment>
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

export default Menu;
