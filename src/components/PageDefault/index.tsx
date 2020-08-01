import React from 'react'

import { Main } from './styles'
import Footer from '../Footer'
import Menu from '../Menu'

const PageDefault: React.FC = ({ children }) => (
  <>
    <Menu />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default PageDefault
