import React from 'react';

import styled from 'styled-components';
import InputField from './InputField/InputField';
import { textMargin } from '../../../constants/pageLayouts';

export const InputStyled = props => (
  <InputStyledWrapper>
    <InputField {...props} />
  </InputStyledWrapper>
);

const InputStyledWrapper = styled.div`
  margin-top: ${textMargin};

  input {
    width: 20em;
  }

  .evidence-url {
    margin-bottom: 2em;
  }
`;

export default InputStyled;
