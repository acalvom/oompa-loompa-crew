import { useState, useEffect } from 'react'
import { getPageOompas, getOompaByID } from '@/services'

export const useOompas = ({ page = 1, oompaId = 1 }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [oompas, setOompas] = useState([])
  const [oompa, setOompa] = useState({
    first_name: '',
    last_name: '',
    profession: '',
    image: '',
    description: '',
    gender: '',
  })

  const getAllOompas = async () => {
    setIsLoading(true)
    try {
      const data = await getPageOompas(page)
      return data.results
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getOompa = async () => {
    setIsLoading(true)
    try {
      return await getOompaByID(oompaId)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAllOompas().then((data) => setOompas(data))
  }, [page])

  useEffect(() => {
    getOompa().then((data) => setOompa(data))
  }, [oompaId])

  return [oompa, oompas, isLoading]
}
