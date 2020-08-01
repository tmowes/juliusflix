import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/FormField'
import { useForm } from '../../hooks/useForm'
import { getCategories } from '../../repositories/categories'
import { Container, FormContainer } from './styles'
import { CategoryProps } from './types'

const AddCategory: React.FC = () => {
  const initialvalues = {
    id: 1,
    categoryTitle: '',
    description: '',
    color: '#21222c',
  }
  const { values, handleChange, clearForm } = useForm(initialvalues)
  const [categories, setCategories] = useState<CategoryProps[]>([])

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()
      setCategories([...categories, values])
      clearForm(initialvalues)
    },
    [categories, clearForm, initialvalues, values],
  )

  useEffect(() => {
    async function loadDatabases(): Promise<void> {
      const categoriesList = await getCategories()
      setCategories(categoriesList)
    }
    loadDatabases()
  }, [])

  return (
    <Container>
      <PageDefault>
        <FormContainer>
          <h1>Cadastro de categoria</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <FormField
                label="Titulo"
                name="categoryTitle"
                type="text"
                value={values.categoryTitle}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormField
                label="Descrição"
                name="description"
                type="search"
                value={values.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormField
                label="Cor"
                name="color"
                type="color"
                value={values.color}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
          <ul>
            {categories.map(category => (
              <li key={`${category.id}`}>{category.categoryTitle}</li>
            ))}
          </ul>
          <Link to="/">Ir para home</Link>
        </FormContainer>
      </PageDefault>
    </Container>
  )
}

export default AddCategory
