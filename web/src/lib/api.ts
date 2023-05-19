import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.237.68:3333',
})
