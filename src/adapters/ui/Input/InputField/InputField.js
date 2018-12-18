import React from 'react';
import PropTypes from 'prop-types';

import {
  FormControl,
  InputLabel,
  Input as MaterialInput,
} from '@material-ui/core';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';
import InputAdornment from '../InputAdornment/InputAdornment';
// TODO: error handling for required, type
// TODO: Successfully saved message import { LoadingSpinner } from 'icons'
// TODO: loading, label, type: propTypes.oneOf(['text','date','number']),

const Input = ({
  autoComplete,
  autoFocus,
  className,
  disabled,
  errorMessage,
  icon,
  id,
  isError,
  label,
  name,
  onChange,
  required,
  type,
  value,
}) => (
  <ErrorBoundary componentName="Input">
    <FormControl className={className}>
      {label
        ? <InputLabel htmlFor={name} required={required} error={isError} shrink={true}>
          {label}
        </InputLabel>
        : ''
      }
      <MaterialInput
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        endAdornment={
          icon ? <InputAdornment>{icon}</InputAdornment> : ''
        }
        id={id}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
    </FormControl>
    {isError ? <p className='error-message'>{errorMessage}</p> : ''}
  </ErrorBoundary>
);
Input.propTypes = {
  autoComplete: PropTypes.oneOf([
    'on',
    'off',
  ]),
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  isError: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  type: PropTypes.oneOf([
    'email',
    'number',
    'password',
    'search',
    'text',
    'url',
  ]),
  value: PropTypes.string,
};

Input.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  className: null,
  disabled: false,
  errorMessage: null,
  icon: null,
  id: null,
  isError: false,
  label: null,
  name: null,
  required: false,
  type: 'text',
  value: null,
};

export default Input;
