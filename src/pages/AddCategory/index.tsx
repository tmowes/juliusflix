import React from 'react';

import PageDefault from '../../components/PageDefault';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const AddCategory: React.FC = () => {
  return (
    <Container>
      <PageDefault>
        <h1>Cadastro de categoria</h1>
        <Link to='/cadastro/video'>Cadastrar video</Link>
      </PageDefault>
    </Container>
  );
};

export default AddCategory;
