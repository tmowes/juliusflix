import React from 'react'

import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import { Container, FormContainer } from './styles'

const AddVideo: React.FC = () => {
  return (
    <Container>
      <PageDefault>
        <FormContainer>
          <h1>Cadastro de video</h1>
          <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
        </FormContainer>
      </PageDefault>
    </Container>
  )
}

export default AddVideo
