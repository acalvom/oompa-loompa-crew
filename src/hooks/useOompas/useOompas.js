import { useState, useEffect } from 'react'
import { getPageOompas, getOompaByID } from '@/services'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { getOompas } from '@/redux/oompas/oompasSlice'

export const initialOompa = {
  first_name: '',
  last_name: '',
  profession: '',
  image: '',
  description: '',
  gender: '',
}

export const useOompas = ({ page , oompaId }) => {
  const dispatch = useAppDispatch()
  const oompas = useAppSelector((state) => state.oompas)
  const [isLoading, setIsLoading] = useState(false)
  const [oompa, setOompa] = useState(initialOompa)

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
    page && getAllOompas().then((data) => dispatch(getOompas(data)))
  }, [dispatch, page])

  useEffect(() => {
    oompaId && getOompa().then((data) => setOompa(data))
  }, [oompaId])

  return { oompa, oompas, isLoading }
}
