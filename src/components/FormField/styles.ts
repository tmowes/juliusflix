import styled, { css } from 'styled-components'
import { InputProps } from './types'

export const WrapperFormField = styled.div`
  position: relative;
  textarea {
    min-height: 144px;
  }
  input[type='color'] {
    padding-left: 48px;
  }
`

export const Label = styled.label`
  span {
    position: absolute;
    top: 0;
    color: var(--gray);
    display: flex;
    align-items: center;
    transform-origin: 0% 0%;
    font-size: 18px;
    font-weight: 600;
    margin: 10px 10px;
    transition: 0.1s ease-in-out;
    text-transform: uppercase;
  }
`

export const Input = styled.input<InputProps>`
  background: var(--white);
  color: var(--secondary);
  display: block;
  width: 100%;
  height: 56px;
  font-size: 20px;
  outline: 0;
  border: 4px solid transparent;
  margin-bottom: 32px;
  resize: none;
  border-radius: 4px;
  border-bottom: 4px solid var(--secondary);
  transition: border-color 0.3s;
  :not([type='color']) {
    padding: 16px;
  }
  &:hover,
  &:focus {
    border-bottom-color: var(--orange);
  }
  &:focus:not([type='color']) + span {
    transform: scale(0.59) translateY(-9px);
  }
  ${({ hasValue }) =>
    hasValue &&
    css`
      &:not([type='color']) + span {
        transform: scale(0.59) translateY(-9px);
      }
    `}
`
