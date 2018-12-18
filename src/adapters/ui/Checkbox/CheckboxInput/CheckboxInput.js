import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel, Checkbox as MaterialCheckbox } from '@material-ui/core';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

const CheckboxInput = ({
  checkboxClass,
  checked,
  label,
  name,
  onChange,
  value,
}) => (
  <div className={checkboxClass}>
    <ErrorBoundary componentName="Checkbox">
      <FormControlLabel
        control={
          <MaterialCheckbox
            checked={checked}
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

CheckboxInput.propTypes = {
  checkboxClass: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

CheckboxInput.defaultProps = {
  checkboxClass: null,
  checked: false,
  label: null,
};

export default CheckboxInput;
