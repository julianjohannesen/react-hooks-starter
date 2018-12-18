import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DatePicker from './DatePicker';

const formattedDate = date => moment(new Date(date)).format('YYYY-MM');

class DatePickerWrapper extends Component {
  handleChange = (event) => {
    const { name, onChange } = this.props;
    onChange(event, name);
  }

  getFormattedDate = () => {
    const { initialValue } = this.props;
    if (initialValue) {
      return formattedDate(initialValue);
    }

    return formattedDate(new Date());
  }

  render() {
    const {
      errorMessage,
      initialValue,
      isError,
      label,
      name,
      type,
    } = this.props;
    return (
      <DatePicker
        errorMessage={errorMessage}
        initialValue={this.getFormattedDate(initialValue)}
        isError={isError}
        label={label}
        name={name}
        onChange={this.handleChange}
        type={type}
      />
    );
  }
}

DatePickerWrapper.propTypes = {
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

DatePickerWrapper.defaultProps = {
  errorMessage: null,
  initialValue: null,
  isError: false,
  label: null,
  type: 'month',
};

export default DatePickerWrapper;
