import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--secondary);
  border-top: 2px solid var(--orange);
  padding: 16px 16px;
  color: var(--white);
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 53px;
  }
`;
