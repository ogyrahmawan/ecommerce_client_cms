import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tokogy-cms.herokuapp.com'
})

export default instance
