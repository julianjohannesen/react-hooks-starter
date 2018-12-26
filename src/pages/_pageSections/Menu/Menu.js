import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { InboxIcon } from 'icons';
import { Drawer, List, ListItemLink, ListItemText } from 'ui';
import Header from '../Header/Header';
import './Menu.css';


const menuLinks = [
  {
    text: 'Alpha',
    route: 'alpha',
  },
  {
    text: 'Beta',
    route: 'beta',
  },
  {
    text: 'Gamma',
    route: 'gamma',
  },
  {
    text: 'Delta',
    route: 'delta',
  },
];

const menuItems = (
  <div className="Menu__items">
    <List>
      {menuLinks.map(menuLink => (
          <ListItemLink 
            key={menuLink.text} 
            to={`/${menuLink.route}`} 
            className='Menu__item--link'
          >
            <div className="Menu__item">
              <div className="Menu__item--icon">
                <InboxIcon />
              </div>
              <div className="Menu__item--text">
                <ListItemText primary={menuLink.text} />
              </div>
            </div>
          </ListItemLink>
      ))}
    </List>
  </div>
);

const Menu = ({ toggleDrawer, modalOpen }) => (
  <Fragment>
    <Header toggleDrawer={toggleDrawer} />
    <Drawer
      toggleDrawer={toggleDrawer}
      modalOpen={modalOpen}
    >
      {menuItems}
    </Drawer>
  </Fragment>
  );
export default Menu;
