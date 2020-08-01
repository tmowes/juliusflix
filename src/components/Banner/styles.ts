import styled from 'styled-components'
import { BannerMainProps } from './types'

export const BannerMainContainer = styled.section<BannerMainProps>`
  height: 80vh;
  position: relative;
  color: var(--white);
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    height: auto;
    min-height: 50vh;
  }
  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }
  &:before {
    top: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #21222c 50%, transparent 100%);
  }
`
export const Container = styled.section`
  margin: 0 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 768px) {
    padding-top: 96px;
    flex-direction: column;
  }
`
export const Item = styled.div`
  width: 50%;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`
export const Description = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`
export const Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block;
  padding: 25px;
  line-height: 1;
  border-radius: 4px;
  @media (max-width: 768px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`
export const WatchButton = styled.button`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  color: var(--primary);
  background: var(--white);
  border-color: var(--primary);
  transition: opacity 0.3s;
  display: none;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: block;
  }
`
