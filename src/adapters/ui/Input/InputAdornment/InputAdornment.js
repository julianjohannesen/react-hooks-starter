import React from 'react';
import PropTypes from 'prop-types';

import { Icon, InputAdornment as MaterialInputAdornment } from '@material-ui/core';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

const InputAdornment = ({
  children,
}) => (
  <ErrorBoundary componentName="InputAdornment">
    <MaterialInputAdornment position="end">
      <Icon>{children}</Icon>
    </MaterialInputAdornment>
  </ErrorBoundary>
);

InputAdornment.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InputAdornment;
