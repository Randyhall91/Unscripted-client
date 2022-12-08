import Axios from 'axios'
import { baseURL, bearer } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000,
  headers: { Authorization: `Bearer ${bearer}` }
})