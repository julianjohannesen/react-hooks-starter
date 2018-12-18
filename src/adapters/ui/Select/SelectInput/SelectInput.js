import React from 'react';
import PropTypes from 'prop-types';
import { Select as MaterialSelect } from '@material-ui/core';
import Input from '../../Input/InputField/Input'
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

const SelectInput = ({
  children,
  multiple,
  name,
  onChange,
  value,
}) => (
  <ErrorBoundary componentName="SelectInput">
    <MaterialSelect
      displayEmpty
      input={<Input id={name} />}
      multiple={multiple}
      name={name}
      onChange={onChange}
      value={value}
    >
      {children}
    </MaterialSelect>
  </ErrorBoundary>
);

SelectInput.propTypes = {
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  selectClass: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.string
    ),
  ]).isRequired,
  required: PropTypes.bool,
};

SelectInput.defaultProps = {
  errorMessage: null,
  isError: false,
  label: null,
  multiple: false,
  placeholder: null,
  required: false,
  selectClass: null,
};

export default SelectInput;
