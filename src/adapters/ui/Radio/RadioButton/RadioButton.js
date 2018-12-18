import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel, Radio as MaterialRadio } from '@material-ui/core';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

const RadioButton = ({
  checked,
  disabled,
  label,
  name,
  onChange,
  value,
}) => (
  <div>
    <ErrorBoundary componentName="RadioButton">
      <FormControlLabel
        control={
          <MaterialRadio
            aria-label={label}
            checked={checked}
            disabled={disabled}
            name={name}
            onChange={onChange}
            value={value}
          />
        }
        label={label}
      />
    </ErrorBoundary>
  </div>
);

RadioButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  errorMessage: null,
  label: null,
};

export default RadioButton;
