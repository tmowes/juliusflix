import React, { useCallback, useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import { Container, FormContainer } from './styles'
import FormField from '../../components/FormField'
import { useForm } from '../../hooks/useForm'
import Button from '../../components/Button'
import FormButton from '../../components/FormButton'
import FormButtonsContainer from '../../components/FormButtonsContainer'
import { addVideo } from '../../repositories/videos'
import { FormDataProps } from '../../hooks/types'
import { getCategories } from '../../repositories/categories'

const AddVideo: React.FC = () => {
  const [categories, setCategories] = useState<FormDataProps[]>([])

  const history = useHistory()
  const initialvalues = {
    category: 'Front End',
    videoTitle:
      'Gestão & Pessoas em Tech - Treinamento e desenvolvimento em tecnologia',
    url: 'https://www.youtube.com/watch?v=uMQ9Jk7hw2I',
  }
  const { values, handleChange } = useForm(initialvalues)
  const handleSubmit = useCallback(
    event => {
      event.preventDefault()
      const findCategory = categories.find(
        category => category.categoryTitle === values.category,
      )
      addVideo({
        categoryId: findCategory?.id,
        videoTitle: values.videoTitle,
        url: values.url,
      })
      history.push('/')
    },
    [categories, history, values],
  )

  useEffect(() => {
    async function loadDatabases(): Promise<void> {
      const categoriesList = await getCategories()
      setCategories(categoriesList)
    }
    loadDatabases()
  }, [])

  const categorySuggestions = categories.map(
    ({ categoryTitle }) => categoryTitle,
  )

  return (
    <Container>
      <PageDefault>
        <FormContainer>
          <h1>Cadastro de video</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <FormField
                label="Titulo do video"
                name="videoTitle"
                type="text"
                value={values.videoTitle}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormField
                label="Link do video"
                name="url"
                type="search"
                value={values.url}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormField
                label="Categoria do video"
                name="category"
                type="text"
                value={values.category}
                onChange={handleChange}
                suggestions={categorySuggestions}
              />
            </div>
            <FormButtonsContainer>
              <FormButton type="submit">Cadastrar</FormButton>
              <Button to="/cadastro/categoria"> + Nova Categoria</Button>
            </FormButtonsContainer>
          </form>
        </FormContainer>
      </PageDefault>
    </Container>
  )
}

export default AddVideo
