import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@material-ui/core';

const Loader = ({
  size,
}) => (
  <CircularProgress size={size} />
);

Loader.propTypes = {
  size: PropTypes.number,
};

Loader.defaultProps = {
  size: 35,
};

export default Loader;
