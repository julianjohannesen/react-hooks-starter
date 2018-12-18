import React from 'react';
import styled from 'styled-components';

import { grey } from '../../../constants/colors';
import Loader from './Loader';

export const LoaderStyled = props => (
  <LoaderWrapper>
    <Loader {...props} />
  </LoaderWrapper>
);

const LoaderWrapper = styled.div`
  text-align: center;

  svg {
    color: ${grey};
  }
`;

export default LoaderStyled;
