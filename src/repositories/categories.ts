import axios from 'axios'

import { URL_BACKEND } from '../config'
import { InitialDataProps } from '../pages/Dashboard/types'
import { CategoryProps } from '../hooks/types'

export const getCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await axios.get(`${URL_BACKEND}categories`)
  return data
}

export const getCategoriesWithVideos = async (): Promise<
  InitialDataProps[]
> => {
  const { data } = await axios.get(`${URL_BACKEND}categories?_embed=videos`)
  return data
}
