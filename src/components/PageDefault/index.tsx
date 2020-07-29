import React from 'react';

import { Main } from './styles';
import Footer from '../Footer';
import Menu from '../Menu';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
