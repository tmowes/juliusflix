import styled from 'styled-components'

export const Main = styled.div`
  background: var(--primary);
  color: var(--white);
  flex: 1;
  min-height: calc(100vh - 96px - 94px);
  @media (max-width: 768px) {
    min-height: calc(100vh - 126px - 69px);
  }
`
