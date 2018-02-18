import styled from 'styled-components';

import { lightGray, primary, error } from './colors';
import { animationDuration } from './variables';

export default styled.input`
  background-color: ${({ invalid }) => (invalid ? error : 'transparent')};
  border: 1px solid ${lightGray};
  padding: 0.3rem;
  transition: border ${animationDuration}, background-color ${animationDuration};

  &:focus {
    border-color: ${primary};
  }
`;
