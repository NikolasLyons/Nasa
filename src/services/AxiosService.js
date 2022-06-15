import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 8000,
  params:{
    api_key: 'c4kFzolMymu1KRST4U6OyAZyHrTO3NQTwYKsuQeE',
  }
})

export const Roverapi = Axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=c4kFzolMymu1KRST4U6OyAZyHrTO3NQTwYKsuQeE',
  timeout: 8000,
})



