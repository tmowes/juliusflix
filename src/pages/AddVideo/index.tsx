import React from 'react';

import PageDefault from '../../components/PageDefault';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const AddVideo: React.FC = () => {
  return (
    <Container>
      <PageDefault>
        <h1>Cadastro de video</h1>
        <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
      </PageDefault>
    </Container>
  );
};

export default AddVideo;
