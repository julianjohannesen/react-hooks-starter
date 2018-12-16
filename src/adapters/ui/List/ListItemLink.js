import React from 'react';
// import ListItemText from '@material-ui/core/ListItemText';
import Link from 'navigation/Link';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import ListItemText from './ListItemText';

const ListItemLink = ({ primary, to, children }) => (
  <ListItem button component={Link} to={to}>
    {children && children}
    <ListItemText primary={primary} />
  </ListItem>
);

ListItemLink.propTypes = {
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default ListItemLink;
