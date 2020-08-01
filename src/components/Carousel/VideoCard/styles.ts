import styled from 'styled-components'
import { VideoContainerProps } from './types'

export const VideoCardContainer = styled.a<VideoContainerProps>`
  display: flex;
  flex: 0 0 288px;
  align-items: flex-end;
  position: relative;
  width: 288px;
  height: 160px;
  border: 2px solid;
  border-radius: 8px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: var(--white);
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`
