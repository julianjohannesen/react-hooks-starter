import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, TextField } from '@material-ui/core';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

const DatePicker = ({
  errorMessage,
  initialValue,
  isError,
  label,
  name,
  onChange,
  type,
}) => (
  <ErrorBoundary componentName="DatePicker">
    <FormControl>
      <TextField
        defaultValue={initialValue}
        InputLabelProps={{ shrink: true }}
        label={label}
        name={name}
        onChange={onChange}
        type={type}
      />
    </FormControl>
    {isError ? <p className="error-message">{errorMessage}</p> : null}
  </ErrorBoundary>
);

DatePicker.propTypes = {
  errorMessage: PropTypes.string,
  initialValue: PropTypes.string,
  isError: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'date',
    'month',
    'year',
  ]),
};

DatePicker.defaultProps = {
  errorMessage: null,
  initialValue: null,
  isError: false,
  label: null,
  type: 'month',
};

export default DatePicker;
