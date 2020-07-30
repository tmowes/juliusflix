import styled from 'styled-components';
import { InputProps } from './types';

export const Container = styled.div``;

export const Input = styled.input<InputProps>`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;
