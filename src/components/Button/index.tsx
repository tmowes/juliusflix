import React from 'react';

import { Container } from './styles';
import { ButtonProps } from './type';

const Button: React.FC<ButtonProps> = ({to, children, ...rest }) => {
  return (
    <Container to={to} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
