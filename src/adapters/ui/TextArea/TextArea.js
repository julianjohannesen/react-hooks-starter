import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, TextField as MaterialTextArea } from '@material-ui/core';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

const TextArea = ({
  errorMessage,
  id,
  isError,
  label,
  // maxLength,
  name,
  onChange,
  onFocus,
  required,
  rows,
  value,
}) => (
  <ErrorBoundary componentName="TextArea">
    <FormControl fullWidth={true}>
      <MaterialTextArea
        error={isError}
        id={id}
        fullWidth={true}
        InputLabelProps={{ shrink: true }}
        label={label}
        multiline={true}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        required={required}
        rows={rows}
        value={value}
      />
    </FormControl>
    {isError ? <p className='error-message'>{errorMessage}</p> : ''}
  </ErrorBoundary>
);

TextArea.propTypes = {
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  isError: PropTypes.bool,
  label: PropTypes.string,
  // maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
};

TextArea.defaultProps = {
  errorMessage: null,
  id: null,
  isError: false,
  label: null,
  maxLength: 3000,
  required: false,
  rows: 4,
  value: null,
};

export default TextArea;
