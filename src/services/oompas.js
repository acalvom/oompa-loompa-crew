import axios from 'axios'

export const getOompas = async (page = 1) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}?page=${page}`)
  return res.data
}

export default { getOompas }
