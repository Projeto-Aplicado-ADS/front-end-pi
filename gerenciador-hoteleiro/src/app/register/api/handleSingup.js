import axios from 'axios'

export const handleSingUp = (data) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_ROUTER}/users/singup`, data)
}
