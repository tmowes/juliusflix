import React from 'react'

import { Container } from './styles'
import { FormButtonProps } from './types'

const FormButton: React.FC<FormButtonProps> = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  )
}

export default FormButton
