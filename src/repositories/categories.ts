import axios from 'axios'

import { URL_BACKEND } from '../config'
import { CategoryProps } from '../pages/AddCategory/types'
import { InitialDataProps } from '../pages/Dashboard/types'

export const getCategories = async (): Promise<CategoryProps[]> => {
  const { data } = await axios.get(`${URL_BACKEND}categories`)
  // console.log('data', data)
  return [...data]
}

export const getCategoriesWithVideos = async (): Promise<
  InitialDataProps[]
> => {
  const { data } = await axios.get(`${URL_BACKEND}categories?_embed=videos`)
  // console.log('data', data)
  return data
}
