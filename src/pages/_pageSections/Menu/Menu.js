import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { InboxIcon } from 'icons';
import { Drawer, List, ListItemLink } from 'ui';
import Header from '../Header/Header';
import './Menu.css';


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
  },
];

const menuItems = (
  <Fragment>
    <div className="menu__menuItems">
      <List>
        {menuLinks.map(menuLink => (
          <ListItemLink key={menuLink.text} to={`/${menuLink.route}`} primary={menuLink.text}>
            <InboxIcon />
          </ListItemLink>
        ))}
      </List>
    </div>
  </Fragment>
);

const Menu = ({ toggleDrawer, modalOpen }) => (
  <Fragment>
    <Header
      toggleDrawer={toggleDrawer}
    />
    <Drawer
      toggleDrawer={toggleDrawer}
      modalOpen={modalOpen}
    >
      {menuItems}
    </Drawer>
  </Fragment>);
export default Menu;
