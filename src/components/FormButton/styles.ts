import styled from 'styled-components'

export const Container = styled.button`
  display: inline-block;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid var(--orange);
  color: var(--orange);
  border-radius: 6px;
  padding: 16px;
  transition: opacity 300ms;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`
