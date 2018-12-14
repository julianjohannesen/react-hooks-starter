import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Link = ({ to, children }) => (
  <RouterLink to={to}>{children}</RouterLink>
);

export default Link;
