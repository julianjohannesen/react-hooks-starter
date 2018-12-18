import React from 'react';
import PropTypes from 'prop-types';

import CheckboxInput from '../CheckboxInput/CheckboxInput';
import ErrorBoundary from '../../../../components/ErrorBoundary/ErrorBoundary';

const CheckboxQuestion = ({
  checkboxClass,
  checkboxOptions,
  errorMessage,
  isError,
  onChange,
}) => (
  <ErrorBoundary componentName="CheckboxQuestion">
    {checkboxOptions.map(
      checkboxOption => (
        <div key={checkboxOption.value}>
          <CheckboxInput
            checkboxClass={checkboxClass}
            checked={checkboxOption.checked}
            key={checkboxOption.value}
            label={checkboxOption.label}
            name={checkboxOption.name}
            onChange={onChange}
            value={checkboxOption.value}
          />
          { checkboxOption.after }
        </div>
      )
    )}
    {isError ? <p className="error-message">{errorMessage}</p> : ''}
  </ErrorBoundary>
);

CheckboxQuestion.propTypes = {
  checkboxClass: PropTypes.string,
  checkboxOptions: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      checked: PropTypes.bool,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      after: PropTypes.node,
    })
  ).isRequired,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxQuestion.defaultProps = {
  checkboxClass: null,
  errorMessage: null,
  isError: false,
};

export default CheckboxQuestion;
