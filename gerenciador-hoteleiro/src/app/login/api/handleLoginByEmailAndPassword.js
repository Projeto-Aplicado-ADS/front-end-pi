import axios from 'axios'

export const handleLoginByEmailAndPassword = (data) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_ROUTER}/users/login`, data)
}
