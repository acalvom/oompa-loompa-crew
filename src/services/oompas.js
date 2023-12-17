import axios from 'axios'

export const getPageOompas = async (page = 1) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}?page=${page}`)
  return res.data
}

export const getOompaByID = async (id) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
  return res.data
}

export default { getPageOompas, getOompaByID }
