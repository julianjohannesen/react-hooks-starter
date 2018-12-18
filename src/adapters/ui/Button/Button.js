import React from 'react';
import PropTypes from 'prop-types';

import { Button as MaterialButton } from '@material-ui/core';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

const Button = ({
  children,
  className,
  color,
  disabled,
  name,
  onClick,
  type,
}) => (
  <ErrorBoundary componentName="Button">
    <MaterialButton
      className={className}
      color={color}
      disabled={disabled}
      name={name}
      onClick={onClick}
      type={type}
      variant="contained"
    >
      {children}
    </MaterialButton>
  </ErrorBoundary>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
  ]),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'button',
    'submit',
  ]),
  value: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: null,
  color: 'primary',
  disabled: false,
  name: null,
  type: 'button',
  value: null,
};

export default Button;
