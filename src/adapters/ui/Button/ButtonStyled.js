import React from 'react';
import styled from 'styled-components';

import { darkGrey, lightGreen, maroon } from '../../../constants/colors';
import Button from './Button';

const ButtonStyled = props => (
  <ButtonStyledWrapper>
    <Button {...props} />
  </ButtonStyledWrapper>
);

const ButtonStyledWrapper = styled.span`
  button {
    background-color: ${lightGreen};
    color: white;
  }

  button:hover {
    background-color: ${darkGrey};
    color: ${lightGreen};
  }

  .cancel {
    background-color: ${maroon};
  }

  .previous {
    float: left;
  }

  .next {
    float: right;
  }
`;

export default ButtonStyled;
