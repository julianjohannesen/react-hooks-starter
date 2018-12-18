import React from 'react';
import PropTypes from 'prop-types';

import HashLink from 'react-router-hash-link';

const isExternal = url => window.location.host !== url.host;

const Link = ({
  children,
  to,
}) => (
  isExternal(to)
    ? <a href={to}>{children}</a>
    : <HashLink to={to}>{children}</HashLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
