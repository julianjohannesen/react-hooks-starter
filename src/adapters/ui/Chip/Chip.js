import React from 'react';
import PropTypes from 'prop-types';

import { Chip as MaterialChip } from '@material-ui/core';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';
import { lighterGrey } from '../../../constants/colors';

const Chip = ({
  color,
  label,
  onClick,
  onDelete,
}) => (
  <ErrorBoundary componentName="Chip">
    <MaterialChip
      label={label}
      onClick={onClick}
      onDelete={onDelete}
      style={{ backgroundColor: color }}
    />
  </ErrorBoundary>
);

Chip.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

Chip.defaultProps = {
  color: lighterGrey,
};

export default Chip;
