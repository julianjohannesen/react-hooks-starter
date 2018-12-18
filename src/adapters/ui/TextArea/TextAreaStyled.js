import React from 'react';

import styled from 'styled-components';
import TextArea from './TextArea';
import { textMargin } from '../../../constants/pageLayouts';

export const TextAreaStyled = props => (
  <TextAreaStyleWrapper>
    <TextArea {...props} />
  </TextAreaStyleWrapper>
);

const TextAreaStyleWrapper = styled.div`
  width: 35em;
  margin-top: ${textMargin};

  textarea {
    width: 100%;
  }
`;

export default TextAreaStyled;
