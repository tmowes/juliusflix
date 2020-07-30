/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';

import PageDefault from '../../components/PageDefault';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { CategoryProps } from './types';
import FormField from '../../components/FormField';

const AddCategory: React.FC = () => {
  const initialvalues = {
    categoryTitle: '',
    description: '',
    color: '#21222c',
  };

  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [values, setValues] = useState(initialvalues);

  const setValue = useCallback(
    (key, value) => {
      setValues({
        ...values,
        [key]: value,
      });
    },
    [values],
  );

  const handleChange = useCallback(
    event => {
      setValue(event.target.getAttribute('name'), event.target.value);
    },
    [setValue],
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      setCategories([...categories, values]);
    },
    [categories, values],
  );

  return (
    <Container>
      <PageDefault>
        <h1>Cadastro de categoria</h1>
        <h2>{values.categoryTitle}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <FormField
              label='Titulo'
              name='categoryTitle'
              type='text'
              value={values.categoryTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              label='Descrição'
              name='description'
              type='text'
              value={values.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <FormField
              label='Cor'
              name='color'
              type='color'
              value={values.color}
              onChange={handleChange}
            />
          </div>
          <button>Cadastrar</button>
        </form>
        <ul>
          {categories.map((category, index) => (
            <li
              key={`${category}${index}`}>{`${category.categoryTitle}${index}`}</li>
          ))}
        </ul>
        <Link to='/'>Ir para home</Link>
      </PageDefault>
    </Container>
  );
};

export default AddCategory;
