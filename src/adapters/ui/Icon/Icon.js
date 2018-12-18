import React from 'react';
import PropTypes from 'prop-types';

import { Icon as MaterialIcon } from '@material-ui/core';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

const Icon = ({
  children,
  color,
  iconClass,
  size,
}) => (
  <ErrorBoundary>
    <MaterialIcon
      className={iconClass}
      fontSize={size}
      style={{ color }}
    >
      {children}
    </MaterialIcon>
  </ErrorBoundary>
);

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  component: PropTypes.string,
  iconClass: PropTypes.string,
  size: PropTypes.oneOf([
    'inherit',
    'default',
    'small',
    'large',
  ]),
};

Icon.defaultProps = {
  color: 'inherit',
  component: 'span',
  iconClass: null,
  size: 'default',
};

export default Icon;
