import React, { useState, useEffect, useCallback } from 'react'
import PageDefault from '../../components/PageDefault'
import FormField from '../../components/FormField'
import { useForm } from '../../hooks/useForm'
import { getCategories } from '../../repositories/categories'
import { Container, FormContainer } from './styles'
import FormButtonsContainer from '../../components/FormButtonsContainer'
import Button from '../../components/Button'
import FormButton from '../../components/FormButton'
import { FormDataProps } from '../../hooks/types'

const AddCategory: React.FC = () => {
  const initialvalues = {
    categoryTitle: '',
    description: '',
    color: '#21222c',
  }
  const { values, handleChange, clearForm } = useForm(initialvalues)
  const [categories, setCategories] = useState<FormDataProps[]>([])

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
            <FormButtonsContainer>
              <Button to="/">Volta para página inicial</Button>
              <FormButton type="submit">Cadastrar</FormButton>
            </FormButtonsContainer>
          </form>
          <ul>
            <h3>Lista de categorias cadastradas:</h3>
            {categories.map(category => (
              <li key={`${category.id}`}>{category.categoryTitle}</li>
            ))}
          </ul>
        </FormContainer>
      </PageDefault>
    </Container>
  )
}

export default AddCategory
