import React from 'react';

import PageDefault from '../../components/PageDefault';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const AddCategory: React.FC = () => {
  return (
    <Container>
      <PageDefault>
        <h1>Cadastro de categoria</h1>
        <h1>Cadastro de Categoria</h1>

        <form>
          <label>
            Nome da Categoria:
            <input type='text' />
          </label>

          <button>Cadastrar</button>
        </form>

        <Link to='/'>Ir para home</Link>
        {/* <Link to='/cadastro/video'>Cadastrar video</Link> */}
      </PageDefault>
    </Container>
  );
};

export default AddCategory;
