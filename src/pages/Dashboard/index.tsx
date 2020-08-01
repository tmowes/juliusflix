import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import Banner from '../../components/Banner'
import Carousel from '../../components/Carousel'
import { getCategoriesWithVideos } from '../../repositories/categories'
import { InitialDataProps } from './types'
import PageDefault from '../../components/PageDefault'

const Dashboard: React.FC = () => {
  const [initialData, setInitialData] = useState<InitialDataProps[]>(
    [] as InitialDataProps[],
  )

  useEffect(() => {
    async function loadDatabases(): Promise<void> {
      const categoriesWithVideoList = await getCategoriesWithVideos()
      setInitialData(categoriesWithVideoList)
    }
    loadDatabases()
  }, [])

  return (
    <div style={{ background: '#21222c' }}>
      <Container>
        <PageDefault>
          {initialData.length === 0 ? (
            <div>LOADING...</div>
          ) : (
            // eslint-disable-next-line consistent-return
            initialData.map((category, index) => {
              if (index === 0) {
                return (
                  <div key={category.id}>
                    <Banner
                      videoTitle={initialData[0].videos[1].videoTitle}
                      url={initialData[0].videos[1].url}
                      videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
                    />
                    <Carousel ignoreFirstVideo category={initialData[0]} />
                  </div>
                )
              }
              return <Carousel key={category.id} category={category} />
            })
          )}
        </PageDefault>
      </Container>
    </div>
  )
}

export default Dashboard
