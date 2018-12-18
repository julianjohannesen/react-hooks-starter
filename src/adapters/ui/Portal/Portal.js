import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Portal as MaterialPortal } from '@material-ui/core';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';

const Portal = ({
  children,
  open,
  portalClass,
}) => (
  <ErrorBoundary componentName="Portal">
    {
      open
        ? <MaterialPortal>
          <PortalStyles>
            <div className={portalClass}>{children}</div>
          </PortalStyles>
        </MaterialPortal>
        : ''
    }
  </ErrorBoundary>
);

const PortalStyles = styled.div`
  .portal {
    text-align: center;
  }

  .portal p {
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`;

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  portalClass: PropTypes.string,
};

Portal.defaultProps = {
  portalClass: null,
};

export default Portal;
