import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/juliusFlix.png'
import Button from '../Button'

export const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--secondary);
`
export const NavigationMenu = styled.nav`
  width: 100%;
  height: 96px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--orange);
  @media (max-width: 768px) {
    height: 48px;
    justify-content: center;
  }
`
export const HomeLink = styled(Link)``

export const AddVideoLink = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid var(--white);
  color: var(--white);
  border-radius: 8px;
  padding: 16px 24px;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--orange);
    text-align: center;
    border: 0;
    border-radius: 0;
  }
`
export const Logo = styled.img.attrs({
  src: LogoImg,
  alt: 'JULIUSFLIX',
})`
  max-height: 64px;
  @media (max-width: 768px) {
    max-height: 32px;
  }
`
