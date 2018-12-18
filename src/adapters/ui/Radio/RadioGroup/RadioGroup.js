import React from 'react';
import PropTypes from 'prop-types';

import { FormControl, RadioGroup as MaterialRadioGroup } from '@material-ui/core';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';
import RadioButton from '../RadioButton/RadioButton';

const RadioGroup = ({
  disabled,
  errorMessage,
  isError,
  name,
  onChange,
  radioOptions,
  value,
}) => (
  <ErrorBoundary componentName="RadioGroup">
    <FormControl>
      <MaterialRadioGroup name={name} value={value}>
        {
          radioOptions.map(radioOption => (
            <RadioButton
              disabled={disabled}
              key={radioOption.id}
              label={radioOption.text}
              name={name}
              onChange={onChange}
              value={radioOption.id.toString()}
            />
          ))
        }
      </MaterialRadioGroup>
    </FormControl>
    {isError ? <p className='error-message'>{errorMessage}</p> : ''}
  </ErrorBoundary>
);

RadioGroup.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  radioOptions: PropTypes.arrayOf(
    PropTypes.exact({
      group: PropTypes.string,
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      question: PropTypes.string,
      tag: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string,
};

RadioGroup.defaultProps = {
  disabled: false,
  errorMessage: null,
  isError: false,
};

export default RadioGroup;
