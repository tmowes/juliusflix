import axios from 'axios'

import { URL_BACKEND } from '../config'
import { VideoProps } from '../hooks/types'

export const addVideo = async (data: VideoProps): Promise<void> => {
  await axios.post(`${URL_BACKEND}videos`, data)
}
