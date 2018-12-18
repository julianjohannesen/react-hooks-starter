import React from 'react';
import PropTypes from 'prop-types';

import { Card as MaterialCard, CardContent } from '@material-ui/core';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

const cardStyle = { // TODO: Move
  left: '35%',
  position: 'fixed',
  top: '50%',
  zIndex: 1000,
};

const Card = ({
  cardClass,
  children,
}) => (
  <ErrorBoundary componentName="Card">
    <MaterialCard className={cardClass} style={cardStyle}>
      <CardContent>
        {children}
      </CardContent>
    </MaterialCard>
  </ErrorBoundary>
);

Card.propTypes = {
  cardClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  cardClass: null,
};

export default Card;
