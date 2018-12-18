import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';
import RadioGroup from '../RadioGroup/RadioGroup';

export const RadioQuestion = ({
  disabled,
  errorMessage,
  isError,
  name,
  onChange,
  radioClass,
  radioOptions,
  value,
}) => (
  <div className={radioClass}>
    <ErrorBoundary componentName="RadioQuestion">
      <RadioGroup
        disabled={disabled}
        errorMessage={errorMessage}
        isError={isError}
        name={name}
        onChange={onChange}
        radioOptions={radioOptions}
        value={value}
      />
    </ErrorBoundary>
  </div>
);

RadioQuestion.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  radioClass: PropTypes.string,
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
};

RadioQuestion.defaultProps = {
  disabled: false,
  errorMessage: null,
  isError: false,
  name: null,
  radioClass: null,
};

export default RadioQuestion;
